Aria.classDefinition({
    $classpath: "tests.snippets.ModulesTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.modules.Controller",
            "tests.snippets.modules.Filters",
            "tests.snippets.modules.FlowControllers",
            "tests.snippets.modules.SubControllers"
        );
    }
})
