Aria.classDefinition({
    $classpath : "tests.TplTestCase",
    $extends : "aria.jsunit.TestCase",

    $constructor : function () {
        this.$TestCase.constructor.call(this);
        document.getElementById("TESTAREA").style.display = "none";
    },

    $prototype : {

        tearDown : function () {
            Aria.disposeTemplate("TESTAREA");
        },

        notifyTestEnd : function () {
            Aria.disposeTemplate("TESTAREA");
            this.$TestCase.notifyTestEnd.apply(this, arguments);
        }

    }

});