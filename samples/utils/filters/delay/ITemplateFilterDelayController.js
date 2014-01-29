/**
* Public interface for the TemplateFilterDelayController.
*/
Aria.interfaceDefinition ({
    $classpath : 'samples.utils.filters.delay.ITemplateFilterDelayController',
    $extends : 'aria.templates.IModuleCtrl',
    $interface : {
        /**
         * Fake request using either a filter and a delay, a filter with no delay, or no filter.
         */
        search : function () {}
    }
});
