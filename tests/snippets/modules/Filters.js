Aria.classDefinition({
    $classpath: "tests.snippets.modules.Filters",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.modules.filters.MyController",
        "snippets.modules.filters.OfflineFilter",
        "snippets.modules.filters.TargetedFilter"
    ],

    $prototype: {
    }

});