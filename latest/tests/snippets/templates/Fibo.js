Aria.classDefinition({
    $classpath: "tests.snippets.templates.Fibo",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.fibo.Fibonacci"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});