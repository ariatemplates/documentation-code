Aria.classDefinition({
    $classpath : "tests.snippets.pageEngine.SimplePageDef",
    $extends : "tests.JsonTestCase",
    $prototype : {

        testAsyncPageDef : function () {
            this._testJson({
                filepath : "snippets/pageEngine/simplePageDef.json",
                beanClass : "aria.pageEngine.CfgBeans",
                beanName : "PageDefinition",
                cb : {
                    fn : this._afterPageDefCheck,
                    scope : this
                }
            });
        },

        _afterPageDefCheck : function (valid) {
            this.assertTrue(valid, "The downloaded json is not valid");
            this.notifyTestEnd("testAsyncPageDef");
        }

    }
});