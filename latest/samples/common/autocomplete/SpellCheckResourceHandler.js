/**
 * The purpose of this class is to show how to use the spelling mistake underline state in the auto-complete. It does a
 * very basic spell check (with a list of common spelling mistakes).
 * The list of corrections is inside $statics at the end of the file.
 */
Aria.classDefinition({
	$classpath : "samples.common.autocomplete.SpellCheckResourceHandler",
	$extends : "aria.resources.handlers.LCResourcesHandler",
	$dependencies : ["samples.common.autocomplete.ListOfNations"],
	$constructor : function (threshold) {
		this.$LCResourcesHandler.constructor.call(this);
		this.threshold = (threshold) ? threshold : 1;
		this.setSuggestions(samples.common.autocomplete.ListOfNations.NATIONS);
	},
	$prototype : {
		/**
		 * Call the callback with an array of suggestions in its arguments. Suggestions that are exact match are marked
		 * with parameter exactMatch set to true.
		 * @param {String} textEntry
		 * @param {Function} callback
		 */
		getSuggestions : function (textEntry, callback) {
			var spellingMistake = this.COMMON_SPELLINGMISTAKES[textEntry.toLowerCase()];
            this.$LCResourcesHandler.getSuggestions.call(this, spellingMistake != null ? spellingMistake : textEntry, {
				scope : this,
				fn : this._addSpellingMistakeParamCallback,
				args : {
					callback : callback,
					spellingMistake : spellingMistake != null
				}
			});
		},

		/**
		 * Post-process answers from the AIR resources handler to set the spelling mistake property.
		 * @param {Object|Array} res
		 * @param {Object} args
		 */
		_addSpellingMistakeParamCallback : function (res, args) {
			if (args.spellingMistake && res) {
				var suggestions;
				if ("suggestions" in res) {
					suggestions = suggestions;
				} else {
					suggestions = res;
					res = {
						suggestions : suggestions
					};
				}
				// this triggers the error state of the autocomplete:
				res.error = true;

				// normally, when reaching this point, suggestions should never be null (unless resources are not
				// available...)
				if (suggestions && suggestions.length >= 1) {
					// write on the first suggestion that there was a spelling mistake:
					suggestions[0]['view:spellingSuggestion'] = true;
					for (var i = 0, l = suggestions.length; i < l; i++) {
						// set the exactMatch property to false (as there was a spelling mistake)
						suggestions[i].exactMatch = false;
					}
				}
			}
			this.$callback(args.callback, res);
		},

		/**
		 * Get the default template to be used to display results.
		 * Can be overridden by suggestionsTemplate in AutoComplete configuration parameters.
		 * @return {String} template classpath
		 */
		getDefaultTemplate : function () {
			return "samples.common.autocomplete.SpellCheckListTemplate";
		}

	},
	$statics : {
		COMMON_SPELLINGMISTAKES : {
            "auss" : "austria",
            "bell" : "belgium",
            "bull" : "bulgaria",
            "cypp" : "cyprus",
            "czee" : "czech republic",
            "denn" : "denmark",
            "estt" : "estonia",
            "finn" : "finland",
            "fraa" : "france",
            "gerr" : "germany",
            "gree" : "greece",
            "hunn" : "hungary",
            "iree" : "ireland",
            "itaa" : "italy",
            "latt" : "latvia",
            "litt" : "lithuania",
            "luxx" : "luxembourg",
            "mall" : "malta",
            "nett" : "netherlands",
            "poll" : "poland",
            "porr" : "portugal",
            "romm" : "romania",
            "sloo" : "slovakia",
            "sloo" : "slovenia",
            "spaa" : "spain",
            "swee" : "sweden",
            "unii" : "united kingdom"
		}
	}
});