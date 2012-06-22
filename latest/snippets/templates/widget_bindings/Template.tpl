{Template {
	$classpath: 'ariadoc.snippets.templates.widget_bindings'
}}
	{macro main()}
		{@aria:TextField {
			label: 'Say Hello',
			bind: {
				value: { inside: data, to: "name" }
			}
		}/}
		{@aria:Button {
			label: "Shout!"
		}/}
	{/macro}
{/Template}