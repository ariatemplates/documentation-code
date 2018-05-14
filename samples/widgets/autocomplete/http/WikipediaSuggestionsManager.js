Aria.classDefinition({
    $classpath: "samples.widgets.autocomplete.http.WikipediaSuggestionsManager",
    $dependencies: ["aria.core.IO"],
    $singleton: true,
    $constructor: function () {
        // removes the default "X-Requested-With" header which makes CORS requests fail on Wikipedia
        aria.core.IO.headers = {};
        this._cache = {};
    },
    $destructor: function () {
        this._cache = null;
    },
    $prototype: {
        normalizeEntry: function (entry) {
            return entry.trim().toLowerCase();
        },
        getCacheItem: function (normalizedEntry) {
            var cacheKey = "-" + normalizedEntry;
            var cacheItem = this._cache[cacheKey];
            if (!cacheItem) {
                cacheItem = this._cache[cacheKey] = {
                    key: cacheKey,
                    state: "INIT",
                    callbacks: [],
                    result: null
                };
            }
            return cacheItem;
        },
        request: function (entry, callback) {
            entry = this.normalizeEntry(entry);
            var cacheItem = this.getCacheItem(entry);
            if (cacheItem.state === "INIT") {
                cacheItem.state = "PENDING";
                cacheItem.callbacks.push(callback);
                aria.core.IO.asyncRequest({
                    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + encodeURIComponent(entry),
                    expectedResponseType: "json",
                    callback: {
                        fn: this.handleResponse,
                        onerror: this.handleResponse,
                        scope: this,
                        args: cacheItem
                    }
                });
            } else if (cacheItem.state === "PENDING") {
                cacheItem.callbacks.push(callback);
            } else if (cacheItem.state === "DONE") {
                this.$callback(callback, cacheItem.result);
            }
        },
        handleResponse: function (response, cacheItem) {
            var error = response.error;
            var result = null;
            try {
                result = this.computeResult(response);
            } catch (exception) {
                error = exception || true;
            }
            cacheItem.result = result;
            // in case of error, if the cache item has not changed in the cache,
            // removes it to allow next requests to retry:
            if (error && this._cache[cacheItem.key] === cacheItem) {
                delete this._cache[cacheItem.key];
            }

            // notify callbacks:
            var callbacks = cacheItem.callbacks;
            cacheItem.callbacks = null;
            cacheItem.state = "DONE";
            for (var i = 0, l = callbacks.length; i < l; i++) {
                this.$callback(callbacks[i], result);
            }
        },
        computeResult: function (response) {
            var json = response.responseJSON;
            var titles = json[1];
            var descriptions = json[2];
            var urls = json[3];
            var suggestions = [];
            for (var i = 0, l = titles.length; i < l; i++) {
                suggestions.push({
                    title: titles[i],
                    description: descriptions[i],
                    url: urls[i]
                });
            }
            return suggestions;
        }
    }
});