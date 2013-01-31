Aria.classDefinition({
    $classpath: "tests.snippets.MainTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.CoreTestSuite",
            "tests.snippets.FeaturesTestSuite",
            "tests.snippets.IntroTestSuite",
            "tests.snippets.ModulesTestSuite",
            "tests.snippets.TemplatesTestSuite",
            "tests.snippets.UtilsTestSuite",
            "tests.snippets.WidgetsTestSuite"
        );
    }
})
