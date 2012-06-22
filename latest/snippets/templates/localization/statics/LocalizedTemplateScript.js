Aria.tplScriptDefinition({
	$classpath : 'ariadoc.snippets.templates.localization.statics.LocalizedTemplateScript',

	$prototype : {
		clickOK : function () {
			alert(this.res.hello.label.clickOK);
		}
	}
});
