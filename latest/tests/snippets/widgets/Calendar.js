Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Calendar",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.calendar.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});