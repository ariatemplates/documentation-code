/*
 * This snippet is used in the test documentation
 */


var setOfCode = function() {

    ////#assert
    moduleControllerInstance.submitJsonRequest("search", {
        from: "here"
    }, callback);
    this.cxLogs[0].ioRequest.url; //  http://something.here/search
    ////#assert

    ////#objects
    Aria.classDefinition({
        $classpath: "test.ModuleControllerTest",
        $extends: "aria.jsunit.ModuleCtrlTestCase",
        $dependencies: ["test.mock.RedirectToFile"],
        $prototype: {
            $controller: "myapp.SimpleController",

            setUp: function () {
                aria.core.IOFiltersMgr.addFilter("test.mock.RedirectToFile");
            },

            tearDown: function () {
                aria.core.IOFiltersMgr.removeFilter("test.mock.RedirectToFile");
            },

            testAsyncCallTheServer: function () {
                // Call an asynchronous method on the public interface
                this.$moduleCtrl.processCommand({
                    fn: this.after,
                    scope: this
                });
            },

            after: function () {
                this.assertEventFired("responseReceived");
                // This checks that there are no response error
                this.assertLogsClean();
                this.notifyTestEnd("testAsyncCallTheServer");
            }
        }
    });
    ////#objects

    ////#initModuleController
    Aria.classDefinition({
        $classpath: "test.ModuleControllerTest",
        $extends: "aria.jsunit.ModuleCtrlTestCase",
        $prototype: {
            $controller: {
                classpath: "myapp.SimpleController",
                initArgs: {
                    dataModel: {
                        value: "something"
                    }
                }
            },

            testModel: function () {
                // Assuming that the module sets its data model to
                // what was passed as initArgs
                var data = this.$moduleCtrl.getData();
                this.assertJsonEquals(data, {
                    value: "something"
                });
            }
        }
    });
    ////#initModuleController

    ////#manual
    Aria.classDefinition({
        $classpath: "test.ModuleControllerTest",
        $extends: "aria.jsunit.ModuleCtrlTestCase",
        $dependencies: ["myapp.SimpleController",
                        "aria.templates.ModuleCtrlFactory"],
        $prototype: {
            testAsyncModule: function () {
                aria.templates.ModuleCtrlFactory.createModuleCtrl({
                    classpath: "myapp.SimpleController"
                }, {
                    fn: afterModuleCreation,
                    scope: this
                });
            },

            afterModuleCreation: function (result) {
                if (result.error) {
                    this.fail("Unable to create the module controller: " +
                            result.error);
                } else {
                    var moduleCtrl = result.moduleCtrl;

                    // Start testing something
                    this.registerObject(moduleCtrl);
                    moduleCtrl.callAMethod();
                    this.assertEventFired("anEvent");

                    // End of testing, do some cleaning
                    this.unregisterObject(moduleCtrl);
                    moduleCtrl.$dispose();
                    this.notifyTestEnd("testAsyncModule");
                }
            }
        }
    });
    ////#manual

};
