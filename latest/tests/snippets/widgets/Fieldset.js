Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Fieldset",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.fieldset.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});