Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Gauge",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
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