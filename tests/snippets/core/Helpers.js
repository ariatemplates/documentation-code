Aria.classDefinition({
    $classpath: "tests.snippets.core.Helpers",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.helpers.JsonManipulation"
    ],

    $prototype: {
    }

});