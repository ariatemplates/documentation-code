Aria.classDefinition({
    $classpath: "tests.snippets.features.Prefill",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none"
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.features.prefill.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});