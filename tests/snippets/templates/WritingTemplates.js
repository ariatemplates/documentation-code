Aria.classDefinition({
    $classpath : "tests.snippets.templates.WritingTemplates",
    $extends : "tests.TplTestCase",

    $prototype : {

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.templates.writingTemplates.TemplateStatements",
                provideContext : true
            }, {
                fn : this._deleteViews,
                scope : this
            });
        },

        _deleteViews : function (args) {
            var context = args.tplCtxt._tpl;
            context.myView.$dispose();
            context.viewName.$dispose();
            this.notifyTestEnd("testAsyncLoadTpl");

        }

    }

});