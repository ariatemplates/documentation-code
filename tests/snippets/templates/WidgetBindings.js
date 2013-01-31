Aria.classDefinition({
    $classpath: "tests.snippets.templates.WidgetBindings",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.widget_bindings.MyTemplate",
                data : {name:""}
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});