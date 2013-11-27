
Aria.classDefinition({
    $classpath : 'samples.customization.application.sampleparentmodule.Module',
    $extends : 'aria.templates.ModuleCtrl',
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        alert("Parent module is being disposed.");
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        init : function (initArgs, cb) {
            alert("Parent module is being initialized.");
            this.$callback(cb);
        }
    }
});
