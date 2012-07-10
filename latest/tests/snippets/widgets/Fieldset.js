Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Fieldset",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.fieldset.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});