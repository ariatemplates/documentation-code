Aria.classDefinition({
    $classpath: 'modules.mymodule.MyModuleController',
    $extends: 'aria.templates.ModuleCtrl',
    $implements: ['modules.mymodule.IMyModuleController'],
    $constructor: function () {
        if ( mySpecialCondition ) {
            this.$hasFlowCtrl = 'modules.mymodule.MySuperSpecialClasspath';
        }
        this.$ModuleCtrl.constructor.call(this);
    },
    $prototype: {
        $publicInterfaceName: 'modules.mymodule.IMyModuleController',
        /**
         * Flow controller Classpath, or true if default is to be used.
         * @type Boolean|String
         */
        $hasFlowCtrl : 'modules.mymodule.MySpecialClasspath'
    }
});
