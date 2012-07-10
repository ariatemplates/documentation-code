Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Text",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.text.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});