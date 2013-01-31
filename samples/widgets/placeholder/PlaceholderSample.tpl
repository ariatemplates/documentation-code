/**
 * Copyright Amadeus
 */
{Template {
	$classpath : "samples.widgets.placeholder.PlaceholderSample",
	$wlibs: {
	        "embed": "aria.embed.EmbedLib"
	},
	$css : ["samples.widgets.placeholder.PlaceholderSampleCSS"]
}}

	{macro main ()}
		{@embed:Placeholder {
			name: "body",
			type: "div",
			attributes: {
				classList: ['placeholder']
			}
		}/}
		{@embed:Placeholder {
			name: "sample",
			type: "div",
			attributes: {
				classList: ['placeholder']
			}
		}/}
	{/macro}

{/Template}