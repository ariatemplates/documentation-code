Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Calendar",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.calendar.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});