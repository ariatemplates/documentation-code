Aria.classDefinition({
    $classpath: "tests.snippets.templates.CssTemplates",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            document.getElementById("TESTAREA").style.display="none";
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