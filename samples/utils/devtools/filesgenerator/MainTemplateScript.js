Aria.tplScriptDefinition({
    $classpath : "samples.utils.devtools.filesgenerator.MainTemplateScript",
    $dependencies : ["aria.ext.filesgenerator.Generator"],
    $prototype : {
        $dataReady : function () {
            this.data.skeletonProperties = [];
        },
        setSkeletonType : function () {
            // NEVER EVER DO THIS!!
            var bean = aria.core.JsonValidator.__loadedBeans["aria.ext.filesgenerator.GeneratorBeans"].$beans[this.data.type
                    + "SkeletonTemplate"];
            if (bean) {
                var newSkeletonProperties = {};
                for (var i in bean.$properties) {
                    if (bean.$properties.hasOwnProperty(i)) {
                        newSkeletonProperties[i] = bean.$properties[i];
                    }
                }
                aria.utils.Json.setValue(this.data, "skeletonProperties", newSkeletonProperties);
            }
        },
        generateSkeleton : function () {
            var result = this.$getElementById("result");
            var cfg = {};
            for (var i in this.data.skeletonProperties) {
                var prop = this.data.skeletonProperties[i];
                if (prop.$type == "json:Array" && prop.currentValue && typeof prop.currentValue == "string") {
                    cfg[i] = prop.currentValue.split(",");
                } else {
                    cfg[i] = prop.currentValue;
                }
            }
            if (this.data.type) {
                var skeleton = aria.ext.filesgenerator.Generator.generateFile(this.data.type, cfg);
                result.setValue(skeleton.content);
            } else {
                result.setValue("Choose a type first.");
            }
        }
    }
});
