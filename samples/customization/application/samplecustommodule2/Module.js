
Aria.classDefinition({
    $classpath : 'samples.customization.application.samplecustommodule2.Module',
    $extends : 'aria.templates.ModuleCtrl',
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        alert("Custom module 2 is being disposed. Init arguments: " + this._initArgs.info);
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        init : function (initArgs, cb) {
            this._initArgs = initArgs;
            alert("Custom module 2 is being initialized. Init arguments: " + initArgs.info);
            this.$callback(cb);
        }
    }
});
