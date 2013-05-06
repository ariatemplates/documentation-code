Aria.classDefinition({
    $classpath : "tests.snippets.pageEngine.FacebookResults",
    $extends : "tests.TplTestCase",

    $prototype : {

        setUp : function () {

            aria.core.AppEnvironment.setEnvironment({
                defaultWidgetLibs : {
                    "aria" : "aria.widgets.AriaLib",
                    "embed" : "aria.embed.EmbedLib"
                }
            });

            aria.core.DownloadMgr.updateUrlMap({
                addressBook : {
                    templates : {
                        facebook : {
                            FacebookResults : "snippets/pageEngine/FacebookResults.tpl"
                        }
                    }
                }
            });
        },

        tearDown : function () {
            aria.core.AppEnvironment.setEnvironment({
                defaultWidgetLibs : {
                    "aria" : "aria.widgets.AriaLib"
                }
            });
        },

        testAsyncLoadTpl : function () {
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "addressBook.templates.facebook.FacebookResults"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});