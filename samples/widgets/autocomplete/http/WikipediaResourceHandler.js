Aria.classDefinition({
    $classpath: "samples.widgets.autocomplete.http.WikipediaResourceHandler",
    $implements: ["aria.resources.handlers.IResourcesHandler"],
    $dependencies: ["samples.widgets.autocomplete.http.WikipediaResourceHandlerBean", "samples.widgets.autocomplete.http.WikipediaSuggestionsManager", "aria.utils.Function"],
    $statics: {
        SUGGESTION_BEAN : "samples.widgets.autocomplete.http.WikipediaResourceHandlerBean.Suggestion"
    },
    $constructor: function () {
        this._currentTextEntry = null;
        this._currentCallback = null;
        this._debounceTimeout = null;
        this._onTimeout = aria.utils.Function.bind(this._onTimeout, this);
    },
    $destructor: function () {
        this._currentTextEntry = null;
        this._clearTimeout();
    },
    $prototype: {
        getDefaultTemplate : function () {
            return 'aria.widgets.form.list.templates.LCTemplate';
        },
        suggestionToLabel : function (suggestion) {
            return suggestion.title;
        },
        getAllSuggestions : function () {
            this.$logError("getAllSuggestions is not implemented.");
        },
        getSuggestions : function (textEntry, callback) {
            this._clearTimeout();
            this._currentTextEntry = textEntry;
            this._currentCallback = callback;
            if (textEntry.length > 0) {
                this._setTimeout();
            } else {
                this.$callback(callback, null);
            }
        },
        _clearTimeout: function () {
            if (this._debounceTimeout) {
                clearTimeout(this._debounceTimeout);
                this._debounceTimeout = null;
            }
        },
        _setTimeout: function () {
            this._debounceTimeout = setTimeout(this._onTimeout, 200);
        },
        _onTimeout: function () {
            this._debounceTimeout = null;
            var currentTextEntry = this._currentTextEntry;
            var currentCallback = this._currentCallback;
            samples.widgets.autocomplete.http.WikipediaSuggestionsManager.request(currentTextEntry, {
                fn: function (result) {
                    if (result) {
                        // make a copy of the array so that only the copy is changed by the AutoComplete widget
                        result = result.slice(0);
                    }
                    this.$callback(currentCallback, result);
                },
                scope: this
            });
        }
    }
});
