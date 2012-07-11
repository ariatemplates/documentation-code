Aria.classDefinition({
    $classpath: "tests.snippets.utils.Dragdrop",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
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