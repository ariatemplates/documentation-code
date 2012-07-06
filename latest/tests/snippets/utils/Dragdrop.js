Aria.classDefinition({
    $classpath: "tests.snippets.utils.Dragdrop",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.utils.dragdrop.Drag"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});