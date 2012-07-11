Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Dialog",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.dialog.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});