Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Tabpanel",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.tabpanel.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});