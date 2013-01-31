Aria.tplScriptDefinition({
	$classpath : "samples.widgets.autocomplete.basic.BasicScript",
	$dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {
		/**
		 * Returns the resources using a common handler for all samples containing an AutoComplete.
		 * @param threshold Number Number of characters to be inputed before suggestions are retrieved.
		 * @returns
		 */
		getNationsHandler : function (threshold) {
			var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(threshold);
		}
	}
});