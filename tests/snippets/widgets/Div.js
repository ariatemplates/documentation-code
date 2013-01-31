Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Div",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.div.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});