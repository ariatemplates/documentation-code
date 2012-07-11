Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Button",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.button.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});