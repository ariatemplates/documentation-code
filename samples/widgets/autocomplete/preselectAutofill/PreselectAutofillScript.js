Aria.tplScriptDefinition({
    $classpath : "samples.widgets.autocomplete.preselectAutofill.PreselectAutofillScript",
    $dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
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

        /**
         * Returns the resources using a common handler for all samples containing an AutoComplete.
         * @returns
         */
        getNationsHandler : function () {
            var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
            return autoCompleteResourceHandler.getNationsHandler(1);
        }
    }
});
