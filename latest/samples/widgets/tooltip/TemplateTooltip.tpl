{Template {
	$classpath:'samples.widgets.tooltip.TemplateTooltip',
	$hasScript:true
}}
	{macro main()}
		<div style="position: relative">
		<p>Tooltip is designed to be simple to implement with easily-accessed configuration options and visual styling</p>

		{@aria:Tooltip {id:"simpleTooltip", width: 200}}
			Content of the simple tooltip.
		{/@aria:Tooltip}

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
		<h2>Tooltip in a macro (for better performances)</h2>

		{@aria:Tooltip {
			id:"macroTooltip",
			macro: "tooltipMacro",
			width: 200 }/}

		{@aria:Link {
			label: "Move the mouse here to display the macro tooltip.",
			tooltipId: "macroTooltip" }/}
		<br/>
		<br/>
		{@aria:Link {
			label: "Other link with the same tooltip.",
			tooltipId: "macroTooltip"}/}

		<h2>Tooltips in a 'for' loop</h2>
		<ul>
			{for var i = 0; i<5; i++}
				// Note that the tooltip widget does not produce any markup in the place where it is defined
				{@aria:Tooltip {id:"tooltipInForN"+i,width: 200}}
					Content of the tooltip for line ${i}
				{/@aria:Tooltip}
				<li>{@aria:Link { label : "Line "+i+": move the mouse here to display the tooltip.", tooltipId : "tooltipInForN"+i}/}</li>
			{/for}
		</ul>

		<h2>Tooltips in a 'for' loop in a macro (for better performances)</h2>
		<ul>
			{for var i = 0; i<5; i++}
				// Note that the tooltip widget does not produce any markup in the place where it is defined
				{@aria:Tooltip {
					id:"macroTooltipInForN"+i,
					macro: {name: "tooltipMacroWithParam", args: [i]},
					width: 250}/}
				<li>{@aria:Link {
						label : "Line "+i+": move the mouse here to display the tooltip.",
						tooltipId : "macroTooltipInForN"+i}/}</li>
			{/for}
		</ul>

		<h2>Refreshing sections inside tooltips</h2>

		{@aria:Tooltip {
			id:"sectionTooltip",
			width: 450 }}
				This tooltip has a button and a section. The section can be refreshed:<br/>
				{section "sectionInMyTooltip"}
					Last refresh: ${new Date()}<br/>
					{@aria:Button {label: "Refresh now", onclick: { fn: 'refreshSection', args: { filterSection: "sectionInMyTooltip"} }}/}
				{/section}
		{/@aria:Tooltip}

		{@aria:Link {
			label : "Move the mouse here to display the container tooltip",
			tooltipId : "sectionTooltip" }/}<br/>

		{@aria:Tooltip {
			id:"macroSectionTooltip",
			macro: "tooltipMacroWithSection",
			width: 500 }/}

		{@aria:Link {
			label : "Move the mouse here to display the macro tooltip",
			tooltipId : "macroSectionTooltip" }/}

		<br/>

		<h2>Tooltips with different display/close timeouts</h2>

		{@aria:Tooltip {
			id:"closeTimeoutTooltip",
			width: 250,
			closeOnMouseOutDelay:1000,
			showDelay:500 }}
			This tooltip will stay 1s after the user has left the link !
		{/@aria:Tooltip}
		{@aria:Link {
			label : "Move the mouse here and wait 0.5s to display the last tooltip",
			tooltipId : "closeTimeoutTooltip" }/}
		</div>
	{/macro}

	{macro tooltipMacro()}
		Content of the macro tooltip.
	{/macro}

	{macro tooltipMacroWithParam(i)}
		Content of the macro tooltip for line ${i}
	{/macro}

	{macro tooltipMacroWithSection()}
		This tooltip is in a macro, has a button and a section. The section can be refreshed:<br/>
		{section "macroSectionInMyTooltip"}
			Last refresh: ${new Date()}<br/>
			// In this case, macro must be specified in the refresh parameter, otherwise the section cannot be found
			{@aria:Button {label: "Refresh now", onclick: { fn: 'refreshSection', args: { macro: "tooltipMacroWithSection", filterSection: "macroSectionInMyTooltip"} }}/}
		{/section}
	{/macro}
{/Template}