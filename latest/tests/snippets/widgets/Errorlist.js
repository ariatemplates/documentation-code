Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Errorlist",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.errorlist.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});