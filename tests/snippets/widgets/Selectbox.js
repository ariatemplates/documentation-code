Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Selectbox",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.selectbox.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});