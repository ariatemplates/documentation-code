Aria.classDefinition({
    $classpath: "tests.snippets.templates.Localization",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.localization.statics.LocalizedTemplate"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});