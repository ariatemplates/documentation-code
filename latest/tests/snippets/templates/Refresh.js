Aria.classDefinition({
    $classpath: "tests.snippets.templates.Refresh",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.refresh.Refresh"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});