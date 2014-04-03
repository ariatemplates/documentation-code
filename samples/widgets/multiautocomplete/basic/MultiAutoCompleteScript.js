Aria.tplScriptDefinition({
    $classpath : "samples.widgets.multiautocomplete.basic.MultiAutoCompleteScript",
    $dependencies : ["samples.common.multiautocomplete.MultiAutoCompleteResourceHandler"],
    $prototype : {
        /**
         * Returns the resources using a common handler for all samples containing an MultiAutoComplete.
         * @returns the instanced of range resources handler
         */
        getLCRangeHandler : function () {
            var rangeHandler = samples.common.multiautocomplete.MultiAutoCompleteResourceHandler;
            return rangeHandler.getLCRangeResourceHandler();
        }

    }
});
