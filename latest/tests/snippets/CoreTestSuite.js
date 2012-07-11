Aria.classDefinition({
    $classpath: "tests.snippets.CoreTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.core.Asynchronous",
            "tests.snippets.core.Beans",
            "tests.snippets.core.Classes",
            "tests.snippets.core.Filters",
            "tests.snippets.core.Helpers",
            "tests.snippets.core.Interceptors"
        );
    }
})
