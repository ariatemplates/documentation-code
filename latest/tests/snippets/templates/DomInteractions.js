Aria.classDefinition({
    $classpath: "tests.snippets.templates.DomInteractions",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domInteractions.DomInteractionTemplate"
            }, {
                fn : this.testAsyncLoadTplTwo,
                scope : this
            });
        },

        testAsyncLoadTplTwo : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domInteractions.ProcIndTemplate",
                data : {loading:false}
            }, {
                fn : this.testAsyncLoadTplThree,
                scope : this
            });
        },

        testAsyncLoadTplThree : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domInteractions.TemplateA"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});