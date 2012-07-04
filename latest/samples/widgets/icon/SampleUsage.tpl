{Template {
	$classpath : 'samples.widgets.icon.SampleUsage' } }

	{macro main ( )}
		<h5> Inline Icons </h5>

		{@aria:Icon {
			icon : "std:save" }/}
		{@aria:Icon {
			icon : "std:confirm" }/}
		<br /> <br />
		<h5> Icons with Tooltip </h5>
		{@aria:Icon {
			icon : "std:close",
			tooltip : "Icon with Tooltip" }/}
		<br />
		<h5> Icons with Margin </h5>
		{@aria:Icon {
			icon : "std:up_arrow",
			block : true,
			margins : "15 10 5 10" }/}
		{@aria:Icon {
			icon : "std:down_arrow",
			printOptions : "hidden" }/}
	{/macro}

{/Template}
