Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.widgets.dialog.SnippetScript",
	$prototype : {
		openDialog : function (evt) {
			// no need to do anything
		},
		closeDialog : function (evt) {
			// no need to do anything
		},
        dummy: function() {
            ////#wgtDialogMove
            aria.core.AppEnvironment.setEnvironment({
                widgetSettings : {
                    dialog : {
                        movable : true,
                        movableProxy : {
                            type : "Overlay"
                        }
                    }
                }
            });
            ////#wgtDialogMove
        }
	}
});