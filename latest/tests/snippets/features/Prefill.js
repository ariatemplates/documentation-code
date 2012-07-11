Aria.classDefinition({
    $classpath: "tests.snippets.features.Prefill",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.features.prefill.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});