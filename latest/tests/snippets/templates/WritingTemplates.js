Aria.classDefinition({
    $classpath: "tests.snippets.templates.WritingTemplates",
    $extends: "tests.TplTestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.writingTemplates.TemplateStatements"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});