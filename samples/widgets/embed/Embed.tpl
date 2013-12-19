{Template {
	$classpath : "samples.widgets.embed.Embed",
	$wlibs: {
	        "embed": "aria.embed.EmbedLib"
	},
	$hasScript : true,
	$css : ["samples.widgets.embed.EmbedCSS"]
}}

	{macro main ()}
		{call sectionToRefresh()/}

		{@aria:Button {
			onclick: "addMarkers",
			label: 'Add markers',
			width: 100,
			block: false,
			bind: {
			  disabled: {
			    to: "mapLoading",
			    inside: data
			  }
			}
		} /}
		{@aria:Button {
			onclick: "refresh",
			label: 'Refresh',
			width: 100,
			block: false,
      bind: {
        disabled: {
          to: "mapLoading",
          inside: data
        }
      }
		} /}
	{/macro}
	{macro sectionToRefresh()}
		{section {
			id: "section1",
			macro : "macroContent",
			attributes: {
				classList: ["mySection"]
			}
		}/}
	{/macro}

	{macro macroContent()}
		{@aria:TextField {
			value: "Initial value",
			label: "Textfield with refresh"
		}/}
		<br /><br />
		This is the dom part which cannot be refreshed:

		{@embed:Element {
			controller: this.moduleCtrl.getEmbedController(),
			type: "div",
			attributes: {
				classList: ["googleMapContainer"]
			},
			args : {
				type : 'googleMap',
				number : 1
			}
		}/}
	{/macro}

{/Template}
