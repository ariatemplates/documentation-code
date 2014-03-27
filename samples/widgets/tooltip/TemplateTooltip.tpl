{Template {
	$classpath:'samples.widgets.tooltip.TemplateTooltip',
	$hasScript:true
}}
	{macro main()}
		<div style="position: relative">
		<h2>Basic Tooltip</h2>
		<p>The tooltip widget is designed to be simple to implement with easy configuration options and visual styling</p>
		<br/>
		<p>Its macro property allows to specify which macro is in charge of displaying its content</p>

		{@aria:Tooltip {
			id:"simpleTooltip",
			macro : "simpleTooltipContent",
			width: 200
		}/}

		<p>Hover the target area below to see the tooltip.</p>

		<div class="exampleContainer">
			{@aria:Div {tooltipId: "simpleTooltip", sclass: "dlg", width: 300}}
				<p>Tool tip for Div container</p>
				{@aria:Link {label: "One link in a div."}/}<br/><br/>
			{/@aria:Div}
		</div>

		<p>Tooltip assigned to the link, hover the below link</p>

		<div class="exampleContainer">
			{@aria:Link {
				label: "Link tool tip",
				tooltipId: "simpleTooltip"
			}/}
		</div>

		{@aria:Link {
			label: "Other link with the same tooltip.",
			tooltipId: "simpleTooltip"
		}/}

		<h2>Tooltips in a 'for' loop</h2>
		<ul>
			{for var i = 0; i<5; i++}
				// Note that the tooltip widget does not produce any markup in the place where it is defined
				{@aria:Tooltip {
					id : "tooltipInForN" + i,
					macro : {
						name : "variableTooltipContent",
						args : [i]
					},
					width : 200
				}/}
				<li>{@aria:Link { label : "Line " + i + ": move the mouse here to display the tooltip.", tooltipId : "tooltipInForN"+i}/}</li>
			{/for}
		</ul>

		<h2>Refreshing sections inside tooltips</h2>

		{@aria:Tooltip {
			id : "sectionTooltip",
			macro : "sectionTooltipContent",
			width : 450
		}/}

		{@aria:Link {
			label : "Move the mouse here to display the container tooltip",
			tooltipId : "sectionTooltip"
		}/}<br/>
		<br/>

		<h2>Tooltips with different display/close timeouts</h2>

		{@aria:Tooltip {
			id:"closeTimeoutTooltip",
			macro : "closeTimeoutTooltipContent",
			width: 250,
			closeOnMouseOutDelay:1000,
			showDelay:500
		}/}

		{@aria:Link {
			label : "Move the mouse here and wait 0.5s to display the last tooltip",
			tooltipId : "closeTimeoutTooltip"
		}/}
		</div>
	{/macro}


	{macro simpleTooltipContent()}
		Content of the simple tooltip.
	{/macro}

	{macro variableTooltipContent(i)}
		Content of the tooltip for line ${i}
	{/macro}

	{macro sectionTooltipContent()}
		This tooltip has a button and a section. The section can be refreshed:<br/>
		{section {
			id :"sectionInMyTooltip",
			macro :"macroContent"
		}/}
	{/macro}

	{macro macroContent()}
		Last refresh: ${new Date()}<br/>
		{@aria:Button {
			label : "Refresh now",
			onclick : refreshSection
		}/}
	{/macro}

	{macro closeTimeoutTooltipContent()}
		This tooltip will stay 1s after the user has left the link !
	{/macro}

{/Template}
