Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Sortindicator",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.sortindicator.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});