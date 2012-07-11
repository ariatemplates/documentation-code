Aria.classDefinition({
    $classpath: "tests.snippets.features.Autoselect",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.features.autoselect.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});