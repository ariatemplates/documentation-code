Aria.classDefinition({
    $classpath: "tests.snippets.core.Interceptors",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.interceptors.MyClass",
        "snippets.core.interceptors.MyInterface"
    ],

    $prototype: {
    }

});