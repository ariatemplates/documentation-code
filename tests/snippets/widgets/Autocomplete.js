Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Autocomplete",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.autocomplete.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});