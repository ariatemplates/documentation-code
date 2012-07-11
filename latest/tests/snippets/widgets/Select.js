Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Select",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.select.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});