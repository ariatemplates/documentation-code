Aria.tplScriptDefinition({
	$classpath : "samples.widgets.autocomplete.spellcheck.MainScript",
	$dependencies : ["samples.common.autocomplete.SpellCheckResourceHandler"],
	$prototype : {
		/**
		 * Returns the resources using a common handler for all samples containing an AutoComplete.
		 * @param threshold Number Number of characters to be inputed before suggestions are retrieved.
		 * @returns
		 */
		getNationsHandler : function (threshold) {
			var spellCheckResourceHandler = new samples.common.autocomplete.SpellCheckResourceHandler(threshold);
			return spellCheckResourceHandler;
		}
	}
});
