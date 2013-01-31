Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Numberfield",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.numberfield.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});