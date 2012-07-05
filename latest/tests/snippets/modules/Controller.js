Aria.classDefinition({
    $classpath: "tests.snippets.modules.Controller",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.modules.controller.MyModuleController",
        "snippets.modules.controller.ModuleWithRequest",
        "snippets.modules.controller.MyUrlService"
    ],

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.modules.controller.MyView",
                data : {count:0}
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});