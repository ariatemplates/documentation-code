/**
 * A common class used to handle the resources for any Multi AutoComplete widget that is used within the application.
 */
Aria.classDefinition({
    $classpath : "samples.common.multiautocomplete.MultiAutoCompleteResourceHandler",
    $dependencies : ["aria.resources.handlers.LCRangeResourceHandler",
            "samples.common.multiautocomplete.ListOfLabelCodes"],
    $singleton : true,
    $prototype : {
        /**
         * Get an instance of the resource handler for simple Label Code.
         * @return {aria.resources.handlers.LCRangeResourceHandler} Range handler
         */
        getLCRangeResourceHandler : function (type) {
            var handler = new aria.resources.handlers.LCRangeResourceHandler();
            handler.setSuggestions(samples.common.multiautocomplete.ListOfLabelCodes.AIRSUGGESTIONS);
            return handler;
        },
        getLCRangeResourceHandlerExpando : function () {
            var handler = new aria.resources.handlers.LCRangeResourceHandler();
            handler.setSuggestions(samples.common.multiautocomplete.ListOfLabelCodes.FOSUGGESTIONS);
            return handler;
        },
        getLCRangeResourceHandlerRangeValues : function () {
            var handler = new aria.resources.handlers.LCRangeResourceHandler({
                allowRangeValues : true
            });
            handler.setSuggestions(samples.common.multiautocomplete.ListOfLabelCodes.PAXSUGGESTIONS);
            return handler;
        }
    }
});
