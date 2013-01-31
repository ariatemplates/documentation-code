{Template {
	$classpath:'samples.utils.loadingoverlay.LoadingOverlayTemplate',
	$hasScript:true
}}
	
	{macro main()}
		////#utlOverlay
		{@aria:Button {
			label : "DOM Element Overlay",
			onclick : "clickMe",
			width: 150
		}/}
		{@aria:Button {
			label : "Section Overlay",
			onclick : "clickMe1",
			width: 150
		}/}
		{@aria:Button {
			label : "HTML body Overlay",
			onclick : "clickMe2",
			width: 150
		}/}
		{section "section1"}
		
		<div {id "overlay1" /} style="margin:1em;border: 1px dashed red; height: 50px">
			<p>I am a div(div1) inside a section1<p>
		</div>
		
		<div style="margin:1em;border: 1px dashed green; height: 70px">
			<p>I am another div(div2) inside a section1<p>
		</div>
		{/section}
		////#utlOverlayScript
	{/macro}

{/Template}