Aria.classDefinition({
    $classpath: "tests.snippets.PageEngineTestSuite",
    $extends: "aria.jsunit.TestSuite",
    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.pageEngine.SiteConfiguration",
            "tests.snippets.pageEngine.PageDefinition",
            "tests.snippets.pageEngine.FacebookResults",
            "tests.snippets.pageEngine.DataModel",
            "tests.snippets.pageEngine.SimpleSiteConfig",
            "tests.snippets.pageEngine.SimplePageDef"
        );
    }
})
