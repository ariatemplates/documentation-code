Aria.classDefinition({
    $classpath : "snippets.core.classes.CustomLogger",
    $dependencies : ["snippets.core.classes.MainClass"],
    $singleton : true,

    $statics : {
        DEFAULT_LEVEL : "INFO"
    },

    $constructor : function () {
        this.__currentLevel = this.DEFAULT_LEVEL;
        snippets.core.classes.MainClass.$on({
            "logLevelChange" : function (evt) {
                if (evt.src["level"]) {
                    this.__currentLevel = evt.src["level"];
                } else {
                    this.__currentLevel = this.DEFAULT_LEVEL;
                }
            },
            scope : this
        });
    },

    $prototype : {
// Methods goes here ...
    }
});
