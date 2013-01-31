Aria.classDefinition({
    $classpath: 'snippets.modules.flow_controllers.MyModuleController',
    $extends: 'aria.templates.ModuleCtrl',
    $implements: ['snippets.modules.flow_controllers.IMyModuleController'],
    $constructor: function () {
        if ( mySpecialCondition ) {
            this.$hasFlowCtrl = 'snippets.modules.flow_controllers.MySuperSpecialClasspath';
        }
        this.$ModuleCtrl.constructor.call(this);
    },
    $prototype: {
        $publicInterfaceName: 'snippets.modules.flow_controllers.IMyModuleController',
        /**
         * Flow controller Classpath, or true if default is to be used.
         * @type Boolean|String
         */
        $hasFlowCtrl : 'snippets.modules.flow_controllers.MySpecialClasspath'
    }
});
