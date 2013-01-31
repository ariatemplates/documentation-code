Aria.tplScriptDefinition({
	$classpath : "ariadoc.samples.widgets.autocomplete.HighlightAutofillScript",
	$dependencies : ["ariadoc.samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {
		/**
		 * Get an instance of the resource handler.
		 * @return {aria.resources.handlers.LCResourcesHandler} Label-Code handler
		 */
		getHandler : function () {
			var autoCompleteResourceHandler = ariadoc.ariadoc.samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(1);
		}
	}
});