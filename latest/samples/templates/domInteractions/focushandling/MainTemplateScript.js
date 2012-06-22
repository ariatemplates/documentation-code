Aria.tplScriptDefinition({
	$classpath : 'ariadoc.samples.templates.domInteractions.focushandling.MainTemplateScript',
	$prototype : {

		giveFocusTo : function (evt, args) {
			this.$focus(args.id)
		}
	}
});