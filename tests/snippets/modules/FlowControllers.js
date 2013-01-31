Aria.classDefinition({
    $classpath: "tests.snippets.modules.FlowControllers",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.modules.flow_controllers.MyModuleController",
        "snippets.modules.flow_controllers.MyModuleFlow"
    ],

    $prototype: {
    }

});