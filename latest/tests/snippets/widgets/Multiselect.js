Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Multiselect",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.multiselect.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});