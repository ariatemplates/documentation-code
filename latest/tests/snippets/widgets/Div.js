Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Div",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.div.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});