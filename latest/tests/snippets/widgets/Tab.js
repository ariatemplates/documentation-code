Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Tab",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.tab.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});