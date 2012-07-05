Aria.classDefinition({
    $classpath: "tests.snippets.features.SomeClass",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.features.SomeClass"
    ],

    $prototype: {
    }

});