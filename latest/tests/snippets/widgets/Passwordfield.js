Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Passwordfield",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.passwordfield.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});