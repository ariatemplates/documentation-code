/**
 * Main template script
 * @class modules.mymodule.templates.MainScript
 */
Aria.tplScriptDefinition({
    $classpath:  'samples.customization.flow.flows.templates.MainScript',
    $prototype:{
        onFlowEvent: function (evt) {
            if (evt.name == "stateChange") {
                this.$refresh();
            } else if (evt.name == "emptyFlightAvailReceived") {
                // could be changed to use the @aria:Dialog widget
                alert("There is no flight matching your request!");
            }
        },

        navigate : function (evt, args) {
            this.flowCtrl.navigate(args);
        }
    }
});
