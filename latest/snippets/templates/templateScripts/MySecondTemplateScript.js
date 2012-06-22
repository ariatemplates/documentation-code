Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.templates.templateScripts.MySecondTemplateScript",
	$prototype : {

		printMessage : function () {
			var message = this.myGlobalTemplateVar + this.data.standardMessage + this.moduleCtrl.getMessage();
			return message;
		}

	}

});