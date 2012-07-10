Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Autocomplete",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
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