Aria.tplScriptDefinition({
	$classpath : 'samples.templates.i18n.LocalizedTemplateScript',

	$prototype : {

		clickOK : function () {
			alert(this.res.hello.label.clickOK);
		},

		selectBoxChanged : function () {
			aria.core.environment.Environment.setLanguage(this.data.selectedLocale, {
				fn : this.__newLocaleLoaded,
				scope : this.moduleCtrl
			});
		},

		buttonClicked : function (evt, arg) {
			alert(arg);
		},

		__newLocaleLoaded : function () {
			for (var i = 0; i < Aria.rootTemplates.length; i++) {
				Aria.rootTemplates[i].$refresh();
			}
		}
	}
});
