Aria.classDefinition({
    $classpath: "tests.snippets.FeaturesTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.features.SomeClass",
            "tests.snippets.features.Autoselect",
            "tests.snippets.features.Prefill"
        );
    }
})
