Aria.classDefinition({
    $classpath: "tests.snippets.intro.SgtGreeters",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.intro.view.SgtGreeters",
                data : { people : [] }
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});