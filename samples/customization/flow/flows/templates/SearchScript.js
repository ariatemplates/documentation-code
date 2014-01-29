Aria.tplScriptDefinition({
    $classpath : "samples.customization.flow.flows.templates.SearchScript",
    $dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
    $prototype : {

        getHandler : function () {
            var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
            return autoCompleteResourceHandler.getCitiesHandler(1);
        }
    }
});
