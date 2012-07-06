Aria.tplScriptDefinition({
	$classpath : "snippets.templates.templateScripts.MyThirdTemplateScript",
	$prototype : {

		onModuleEvent : function (evt) {
			if (evt.name === "dataChange") {
				// perform some actions on the view
			}
		},

		onFlowEvent : function (evt) {
			if (evt.name === "navigate") {
				// perform some actions on the view
			}
		}

	}

});