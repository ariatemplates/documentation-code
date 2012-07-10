Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Numberfield",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.numberfield.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});