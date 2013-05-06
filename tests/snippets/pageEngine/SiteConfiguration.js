Aria.classDefinition({
    $classpath : "tests.snippets.pageEngine.SiteConfiguration",
    $extends : "tests.JsonTestCase",
    $prototype : {

        testAsyncSiteConfig : function () {
            this._testJson({
                filepath : "snippets/pageEngine/siteConfiguration.json",
                beanClass : "aria.pageEngine.CfgBeans",
                beanName : "Site",
                cb : {
                    fn : this._afterSiteConfigCheck,
                    scope : this
                }
            });
        },

        _afterSiteConfigCheck : function (valid) {
            this.assertTrue(valid, "The downloaded json is not valid");
            this.notifyTestEnd("testAsyncSiteConfig");
        }

    }
});