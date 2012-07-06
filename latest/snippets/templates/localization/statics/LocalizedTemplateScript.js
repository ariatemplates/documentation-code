Aria.tplScriptDefinition({
	$classpath : 'snippets.templates.localization.statics.LocalizedTemplateScript',

	$prototype : {
		clickOK : function () {
			alert(this.res.hello.label.clickOK);
		}
	}
});
