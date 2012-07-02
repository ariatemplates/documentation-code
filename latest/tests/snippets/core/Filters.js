Aria.classDefinition({
    $classpath: "tests.snippets.core.Filters",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.filters.IoDelayFilter",
        "snippets.core.filters.IoFilter",
        "snippets.core.filters.MyFilterHelper"
    ],

    $prototype: {
    }

});