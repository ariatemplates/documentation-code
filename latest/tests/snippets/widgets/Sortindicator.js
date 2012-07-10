Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Sortindicator",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.sortindicator.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});