{Template {
	$classpath : "snippets.widgets.placeholder.PlaceholderSample",
	$wlibs: {
	        "embed": "aria.embed.EmbedLib"
	},
	$css : ["snippets.widgets.placeholder.PlaceholderSampleCSS"]
}}

	{macro main ()}
	////#wgtPlaceHolderSnippet1
		{@embed:Placeholder {
			name: "body",
			type: "div",
			attributes: {
				classList: ['placeholder']
			}
		}/}
	////#wgtPlaceHolderSnippet1
	
	////#wgtPlaceHolderSnippet2
		{@embed:Placeholder {
			name: "sample",
			type: "div",
			attributes: {
				classList: ['placeholder']
			}
		}/}
	////#wgtPlaceHolderSnippet2
	{/macro}

{/Template}