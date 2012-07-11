Aria.classDefinition({
    $classpath: "tests.snippets.templates.CssTemplates",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.cssTemplates.MyTemplate"
            }, {
                fn : this.testAsyncLoadTplTwo,
                scope : this
            });
        },

        testAsyncLoadTplTwo : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.cssTemplates.AnotherTemplate"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});