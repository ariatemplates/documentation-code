// Template A script
Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.templates.domInteractions.TemplateAScript",
	$prototype : {

		$displayReady : function () {
			this.$focus("thisIsTemplateC");
		}
	}
});