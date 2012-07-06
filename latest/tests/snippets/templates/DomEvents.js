Aria.classDefinition({
    $classpath: "tests.snippets.templates.DomEvents",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domEvents.Main"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});