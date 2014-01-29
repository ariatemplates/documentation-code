Aria.interfaceDefinition({
    $classpath : 'samples.customization.flow.flows.IMyModuleFlow',
    $extends : 'aria.templates.IFlowCtrl',
    $events : {
        "stateChange" : "raised when the current flow state changed",
        "emptyFlightAvailReceived" : "raised when an empty flight avail is received"
    },
    $interface: {
        navigate:function(state) {},
        back:function() {},
        clearHistory:function() {}
    }
});
