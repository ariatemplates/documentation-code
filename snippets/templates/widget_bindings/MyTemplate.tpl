{Template {
	$classpath: 'snippets.templates.widget_bindings.MyTemplate'
}}
	{macro main()}
		{@aria:TextField {
			label: 'Say Hello',
			bind: {
				value: { inside: data, to: "name" }
			}
		}/}
	{/macro}
{/Template}