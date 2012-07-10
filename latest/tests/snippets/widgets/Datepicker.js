Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Datepicker",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.datepicker.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});