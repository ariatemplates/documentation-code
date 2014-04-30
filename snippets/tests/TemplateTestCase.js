/*
 * This snippet is used in the test documentation
 */


var setOfCode = function() {

    ////#skeleton
    Aria.classDefinition({
        $classpath: "MyTemplateTest",
        $extends: "aria.jsunit.TemplateTestCase",
        $prototype: {
            runTemplateTest: function () {
                // Do some assertions

                this.end();
            }
        }
    });
    ////#skeleton

    ////#configuration
    Aria.classDefinition({
        $classpath: "MyTemplateTest",
        $extends: "aria.jsunit.TemplateTestCase",
        $constructor: function () {
            this.$TemplateTestCase.constructor.call(this);
            this.setTestEnv({
                template: "another.path.TemplateToTest"
            });
        },
        $prototype: {
            runTemplateTest: function () {
                // Do some assertions

                this.end();
            }
        }
    });
    ////#configuration

    ////#moduleController
    Aria.classDefinition({
        $classpath: "MyTemplateTest",
        $extends: "aria.jsunit.TemplateTestCase",
        $constructor: function () {
            this.$TemplateTestCase.constructor.call(this);
            this.setTestEnv({
                moduleCtrl: {
                    classpath: "controller.MyController"
                },
                data: null
                //necessary to have the same object inside the template/template
                // script and the module controller
            });
        },
        $prototype: {
            runTemplateTest: function () {
                //call module controller
                this.templateCtxt.moduleCtrl.doRequest(
                    //method setting something in the data object.
                    "ABC", {
                        fn: this.assertModuleCtrlCall,
                        scope: this
                    });
            },
            assertModuleCtrlCall: function () {
                // Do some assertions
                this.assertTrue(this.templateCtxt.data.value !== null);
                this.end();
            }
        }
    });
    ////#moduleController

    ////#label4
    ////#label4

};
