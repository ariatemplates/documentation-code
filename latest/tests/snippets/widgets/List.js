Aria.classDefinition({
    $classpath: "tests.snippets.widgets.List",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.list.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});