/**
 * Copyright Amadeus
 */
{Template {
	$classpath : "samples.widgets.placeholder.Subtemplate2",
	$wlibs: {
	        "embed": "aria.embed.EmbedLib"
	}
}}

	{macro main ()}
		{@embed:Placeholder {
			name: "sample",
			type: "div",
			attributes: {
				classList: ['placeholder']
			}
		}/}
	{/macro}

{/Template}