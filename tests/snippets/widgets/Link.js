Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Link",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.link.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});