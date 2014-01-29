Aria.classDefinition({
    $classpath : 'samples.customization.application.samplecustommodule1.Module',
    $implements : ['samples.customization.application.samplecustommodule1.IModule'],
    $extends : 'aria.templates.ModuleCtrl',
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        alert("Custom module 1 is being disposed. Init arguments: " + this._initArgs.info);
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        $publicInterfaceName : 'samples.customization.application.samplecustommodule1.IModule',

        init : function (initArgs, cb) {
            this._initArgs = initArgs;
            alert("Custom module 1 is being initialized. Init arguments: " + initArgs.info);
            this.$callback(cb);
        },

        myCustomModule1Function : function () {
            alert("Custom module 1 function was called. Init arguments: " + this._initArgs.info);
        }
    }
});
