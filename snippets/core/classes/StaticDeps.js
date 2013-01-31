Aria.classDefinition({
    $classpath : "snippets.core.classes.StaticDeps",

    $dependencies : [
        "aria.utils.String",
        "org.thirdparty.parsers.JavaScript",
        "org.thirdparty.parsers.PerlScript"
    ],

    $prototype : {
        validateScript : function (scriptUri) {
            if (aria.utils.String.endsWith(scriptUri, ".js")) {
                var report = org.thirdparty.parsers.JavaScript.validate(scriptUri)
                // ...
            }
            if (aria.utils.String.endsWith(scriptUri, ".pl")) {
                var report = org.thirdparty.parsers.PerlScript.validate(scriptUri)
                // ...
            }
        }
    }
});
