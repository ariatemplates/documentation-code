Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Radiobutton",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.radiobutton.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});