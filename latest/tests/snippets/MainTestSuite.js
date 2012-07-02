Aria.classDefinition({
    $classpath: "tests.snippets.MainTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        aria.core.DownloadMgr.updateUrlMap({
            snippets : { core : { classes : {
                        "Plant" : "tests/Dummy.js?Plant",
                        "Gardener" : "tests/Dummy.js?Gardener"
            } } },
            org : { thirdparty : { parsers : {
                        "JavaScript" : "tests/Dummy.js?JavaScript",
                        "PerlScript" : "tests/Dummy.js?PerlScript"
            } } }
        });

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
