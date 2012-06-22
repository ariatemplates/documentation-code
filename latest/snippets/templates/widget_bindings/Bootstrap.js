Aria.classDefinition({
	$classpath: 'ariadoc.snippets.templates.widget_bindings.Bootstrap',
	$singleton: true,
	$constructor: function() {
		////#bootstrap
		Aria.loadTemplate({
			classpath: 'ariadoc.snippets.templates.widget_bindings.Template',
			data: {
				name: "Bob"
			}
		});
		////#bootstrap
	}
})