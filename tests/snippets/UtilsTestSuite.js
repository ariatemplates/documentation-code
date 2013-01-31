Aria.classDefinition({
    $classpath: "tests.snippets.UtilsTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.utils.Dragdrop",
            "tests.snippets.utils.Validators"
        );
    }
})
