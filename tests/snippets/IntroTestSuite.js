Aria.classDefinition({
    $classpath: "tests.snippets.IntroTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.intro.SgtGreeters"
        );
    }
})
