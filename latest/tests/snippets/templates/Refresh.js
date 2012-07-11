Aria.classDefinition({
    $classpath: "tests.snippets.templates.Refresh",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.refresh.Refresh"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});