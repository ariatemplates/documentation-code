Aria.classDefinition({
    $classpath : "ariadoc.guides.mall.Controller",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["ariadoc.guides.mall.IController"],
    $dependencies : ["ariadoc.guides.mall.Data"],
    $prototype : {
        $publicInterfaceName : "ariadoc.guides.mall.IController",

        init : function (initArgs, callback) {
            this._data = ariadoc.guides.mall.Data.getViewData();

            // Propagate data change to the template
            ariadoc.guides.mall.Data.$on({
                "dataChange" : {
                    fn : this.$raiseEvent,
                    scope : this
                }
            });

            this.$callback(callback);
        }
    }
})