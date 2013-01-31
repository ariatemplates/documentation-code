Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Tooltip",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.tooltip.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});