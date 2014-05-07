Aria.tplScriptDefinition({
    $classpath : "samples.widgets.multiautocomplete.preselectAutofill.PreselectAutofillScript",
    $dependencies : ["samples.common.multiautocomplete.MultiAutoCompleteResourceHandler"],
    $prototype : {

        $dataReady : function () {
            this.data = {
                cfg : {
                    preselect : "strict",
                    autoFill : true,
                    freeText : true
                },
                value : null
            };

        },

        getLCRangeHandler : function () {
            var multiautoCompleteResourceHandler = samples.common.multiautocomplete.MultiAutoCompleteResourceHandler;
            return multiautoCompleteResourceHandler.getLCRangeResourceHandlerRangeValues();
        }
    }
});
