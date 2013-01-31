Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Icon",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.icon.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});