Aria.tplScriptDefinition({
    $classpath : "samples.utils.devtools.stresstest.CodeGeneratorScript",
    $statics : {
        DEAFULTS : {
            repeat : 2,
            widget : false,
            incremental : false
        }
    },
    $prototype : {
        configurationObject : function (options) {
            // Get the options that differ from the default value
            var differ = [];

            for (var opt in this.DEAFULTS) {
                if (this.DEAFULTS.hasOwnProperty(opt) && this.DEAFULTS[opt] !== options[opt]) {
                    differ.push(opt + ": " + options[opt]);
                }
            }

            if (differ.length == 0) {
                return "";
            } else {
                return "{" + differ.join(", ") + "}";
            }
        }
    }
});
