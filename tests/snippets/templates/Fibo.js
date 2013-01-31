Aria.classDefinition({
    $classpath: "tests.snippets.templates.Fibo",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
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