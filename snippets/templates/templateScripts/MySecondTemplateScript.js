Aria.tplScriptDefinition({
	$classpath : "snippets.templates.templateScripts.MySecondTemplateScript",
	$prototype : {

		printMessage : function () {
			var message = this.myGlobalTemplateVar + this.data.standardMessage + this.moduleCtrl.getMessage();
			return message;
		}

	}

});