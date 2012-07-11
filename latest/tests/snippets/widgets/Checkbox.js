Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Checkbox",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.checkbox.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});