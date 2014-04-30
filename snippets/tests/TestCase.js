/*
 * This snippet is used in the test documentation
 */


var setOfCode = function() {

    ////#example
    Aria.classDefinition({
        $classpath : "snippets.tests.TestCase",
        $extends : "aria.jsunit.TestCase",
        $prototype : {
            testAssertTrue : function () {
                this.assertTrue(false, "This assertion is false");
            }
        }
    });
    ////#example

    ////#assertTrue
    this.assertTrue("a truth-y value");  // assert fail
    // assertTrue(value) corresponds to: assertEquals(value, true)
    ////#assertTrue

    ////#assertEquals
    var number = 12;
    this.assertEquals(number, 12);   // true
    this.assertEquals(number, "12"); // false

    // assertEquals(one, two) corresponds to: assertTrue(one === true)
    // It's preferable to use assertEquals over assertTrue for easier debugging
    ////#assertEquals

    ////#assertJsonEquals
    this.assertEquals([1, 2], [1, 2]); // false
    this.assertJsonEquals([1, 2], [1, 2]); // true
    this.assertJsonEquals({
      one : 1,
      two : 2
    }, {
      two : 2,
      one : 1
    });    // true
    ////#assertJsonEquals

    ////#assertJsonContains
    var serverResponse = {
        one : 1,
        two : 2,
        // other values
        end : "eventually"
    };
    this.assertJsonContains(serverResponse, {
        one : 1
    });   // true
    ////#assertJsonContains

    ////#assertErrorInLogs
    someClass.$raiseError("Error while having fun");
    this.assertErrorInLogs("Error while having fun");   // true
    ////#assertErrorInLogs

    ////#failExplicitly
    if (number > 10) {
        this.fail("I'd like a smaller number");
    }
    ////#failExplicitly


    ////#assertMethods
    this.assertEquals("a", "A", "In a case insensitive world, letter %1 equals %2");
    // It'll log
    // In a case insensitive world, letter "a" equals "A"
    ////#assertMethods

    ////#notifyTestEnd
    Aria.classDefinition({
        $classpath : "AsyncTest",
        $extends : "aria.jsunit.TestCase",
        $prototype : {
            testAsyncMethod : function () {
                someClass.callMeLater({
                    fn : this.methodCallback,
                    scope : this
                });
            },

            methodCallback : function () {
                this.assertTrue(true);
                this.notifyTestEnd("testAsyncMethod");
            }
        }
    });
    ////#notifyTestEnd

    ////#tearDown
    Aria.classDefinition({
        $classpath: "Fixtures",
        $extends: "aria.jsunit.TestCase",
        $prototype: {
            countSetUp: 0, // 2 at the end of testing
            countTearDown: 0, // 2 at the end of testing

            setUp: function () {
                this.countSetUp += 1;
            },

            tearDown: function () {
                this.countTearDown += 1;
            },

            testOne: function () {},

            testTwo: function () {}
        }
    });
    ////#tearDown

    ////#assertEventFired
    Aria.classDefinition({
        $classpath: "Events",
        $extends: "aria.jsunit.TestCase",
        $dependencies: ["anotherClass"],
        $prototype: {
            testEventFired: function () {
                // We must register an object to be able to assert
                // that it's raising events
                this.registerObject(anotherClass);

                // Call a method that raises an event
                anotherClass.callMe();

                this.assertEventFired("callMeDone");
            }
        }
    });
    ////#assertEventFired

};
