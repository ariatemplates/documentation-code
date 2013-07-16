/**
 * Copyright Amadeus
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.widgetlibs.html.template.SimpleSubTemplateScript',
	$constructor : function () {},
	$prototype : {
		$dataReady : function () {
			this.data['label'] = "Label data loaded from template script";
		}
	}
});
