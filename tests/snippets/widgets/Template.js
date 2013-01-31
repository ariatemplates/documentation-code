Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Template",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.template.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});