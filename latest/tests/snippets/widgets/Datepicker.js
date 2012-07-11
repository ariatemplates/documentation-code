Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Datepicker",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.datepicker.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});