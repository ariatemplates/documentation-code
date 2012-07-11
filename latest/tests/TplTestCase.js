Aria.classDefinition({
    $classpath: "tests.TplTestCase",
    $extends: "aria.jsunit.TestCase",

    $constructor : function () {
        this.$TestCase.constructor.call(this);
        document.getElementById("TESTAREA").style.display="none";
    },

    $destructor : function() {
        Aria.disposeTemplate("TESTAREA");
        this.$TestCase.$destructor.call(this);
    },

    $prototype: {

        setUp : function() {
            Aria.disposeTemplate("TESTAREA");
        },

        tearDown : function() {
            Aria.disposeTemplate("TESTAREA");
        }

    }

});