Aria.classDefinition({
    $classpath: "tests.snippets.widgets.MultiAutocomplete",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.multiautocomplete.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});
