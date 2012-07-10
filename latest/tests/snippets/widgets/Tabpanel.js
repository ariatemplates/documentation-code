Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Tabpanel",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.tabpanel.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});