Aria.classDefinition({
    $classpath: "tests.snippets.templates.TemplateScripts",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            window.alert = function(m){};
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.templateScripts.MyTemplate"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        },

        testAsyncLoadTplTwo : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.templateScripts.MySecondTemplate",
                data : {standardMessage:""},
                moduleCtrl : {
                    classpath : "snippets.templates.templateScripts.MyModuleController"
                }
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});