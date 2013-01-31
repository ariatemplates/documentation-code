Aria.classDefinition({
    $classpath: "tests.snippets.core.Asynchronous",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.asynchronous.Async"
    ],

    $prototype: {
    }

});