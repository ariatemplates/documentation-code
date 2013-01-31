Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Text",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.text.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});