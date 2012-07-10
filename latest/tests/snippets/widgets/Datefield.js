Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Datefield",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.datefield.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});