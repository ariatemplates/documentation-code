Aria.tplScriptDefinition({
	$classpath : "ariadoc.samples.features.autoselect.AutoSelectScript",
	$dependencies : ["ariadoc.samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {
		/**
		 * Returns the resources using a common handler for all samples containing an AutoComplete.
		 * @param threshold Number Number of characters to be inputed before suggestions are retrieved.
		 * @returns
		 */
		getNationsHandler : function (threshold) {
			var autoCompleteResourceHandler = ariadoc.samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(threshold);
		}
	}
});