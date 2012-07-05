Aria.tplScriptDefinition({
	$classpath : "samples.widgets.autocomplete.HighlightPreselectScript",
	$dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {
		/**
		 * Get an instance of the resource handler.
		 * @return {aria.resources.handlers.LCResourcesHandler} Label-Code handler
		 */
		getHandler : function () {
			var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(1);
		}
	}
});