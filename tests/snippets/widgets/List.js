Aria.classDefinition({
    $classpath: "tests.snippets.widgets.List",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.list.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});