Aria.classDefinition({
    $classpath: "tests.snippets.templates.Localization",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
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