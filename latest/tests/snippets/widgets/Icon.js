Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Icon",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.icon.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});