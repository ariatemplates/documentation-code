Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Iconbutton",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.iconbutton.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});