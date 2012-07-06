Aria.classDefinition({
    $classpath: "tests.snippets.templates.WritingTemplates",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
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