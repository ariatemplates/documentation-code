Aria.classDefinition({
    $classpath: "tests.snippets.templates.Macros",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.macros.MyTemplate"
            }, {
                fn : this.testAsyncLoadTplTwo,
                scope : this
            });
        },

        testAsyncLoadTplTwo : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.macros.MyOtherTemplate"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});