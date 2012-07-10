Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Dialog",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.dialog.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});