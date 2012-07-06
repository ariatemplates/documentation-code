Aria.classDefinition({
    $classpath: "tests.snippets.templates.TemplateScripts",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTplOne : function () {
            document.getElementById("TESTAREA").style.display="none";
            window.alert = console.log;
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.templateScripts.MyTemplate"
            }, {
                fn : this.testAsyncLoadTplTwo,
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