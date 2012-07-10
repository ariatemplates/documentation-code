Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Gauge",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.gauge.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});