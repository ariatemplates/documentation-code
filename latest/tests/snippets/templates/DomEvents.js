Aria.classDefinition({
    $classpath: "tests.snippets.templates.DomEvents",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.domEvents.Main"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});