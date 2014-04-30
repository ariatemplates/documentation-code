/*
 * This snippet is used in the test documentation
 */


var setOfCode = function() {

    ////#example
    Aria.classDefinition({
        $classpath: 'test.myCompany.MyTestSuite',
        $extends: 'aria.jsunit.TestSuite',
        $constructor: function () {
            this.$TestSuite.constructor.call(this);

            this.addTests(
                "test.myCompany.firstModule.FirstModuleTestSuite",
                "test.myCompany.secondModule.SearchTestCase",
                "test.myCompany.secondModule.RetrieveTestCase"
            );
        }
    });
    ////#example


};
