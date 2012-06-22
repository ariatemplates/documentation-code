Aria.tplScriptDefinition({
	$classpath : 'ariadoc.snippets.templates.i18n.statics.LocalizedTemplateScript',

	$prototype : {
		clickOK : function () {
			alert(this.res.hello.label.clickOK);
		}
	}
});
