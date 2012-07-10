Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Tab",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.tab.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});