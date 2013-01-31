{Template {
	$classpath : "samples.widgets.placeholder.Subtemplate",
	$wlibs: {
	        "embed": "aria.embed.EmbedLib"
	}
}}

	{macro main ()}
		The subtemplate start here<br />
		{@aria:Template {
			defaultTemplate: "samples.widgets.placeholder.Subtemplate2"
		}/}
		<br />The subtemplate finish here
	{/macro}

{/Template}