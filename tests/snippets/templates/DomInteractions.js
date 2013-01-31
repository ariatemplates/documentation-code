Aria.classDefinition({
    $classpath: "tests.snippets.templates.DomInteractions",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domInteractions.DomInteractionTemplate"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        },

        testAsyncLoadTplTwo : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domInteractions.ProcIndTemplate",
                data : {loading:false}
            }, {
                fn : this.notifyTestEnd,
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