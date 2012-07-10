Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Multiselect",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.multiselect.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});