Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Link",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.link.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});