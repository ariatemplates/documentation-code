Aria.classDefinition({
    $classpath : "tests.snippets.pageEngine.DataModel",
    $extends : "tests.JsonTestCase",
    $prototype : {

        testAsyncDataModel : function () {
            this._testJson({
                filepath : "snippets/pageEngine/dataModel.json",
                cb : {
                    fn : this._afterDataModelCheck,
                    scope : this
                }
            });
        },

        _afterDataModelCheck : function (valid) {
            this.assertTrue(valid, "The downloaded json is not valid");
            this.notifyTestEnd("testAsyncDataModel");
        }

    }
});