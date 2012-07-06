Aria.classDefinition({
    $classpath: "tests.snippets.TemplatesTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.templates.CssTemplates",
            "tests.snippets.templates.DomEvents",
            "tests.snippets.templates.DomInteractions",
            "tests.snippets.templates.Fibo",
            "tests.snippets.templates.Localization",
            "tests.snippets.templates.Macros",
            "tests.snippets.templates.Refresh",
            "tests.snippets.templates.TemplateScripts",
            "tests.snippets.templates.WidgetBindings",
            "tests.snippets.templates.WritingTemplates"
        );
    }
})
