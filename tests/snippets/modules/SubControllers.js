Aria.classDefinition({
    $classpath: "tests.snippets.modules.SubControllers",
    $extends: "tests.TplTestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.modules.subcontrollers.MyMainController"
    ],

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.modules.subcontrollers.MyMainView",
                data : {counters:[]}
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});