Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Errorlist",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.errorlist.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});