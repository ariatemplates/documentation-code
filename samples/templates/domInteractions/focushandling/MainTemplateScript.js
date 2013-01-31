Aria.tplScriptDefinition({
	$classpath : 'samples.templates.domInteractions.focushandling.MainTemplateScript',
	$prototype : {

		giveFocusTo : function (evt, args) {
			this.$focus(args.id)
		}
	}
});