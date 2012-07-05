{Template {
	$classpath : 'samples.widgets.numberfield.SampleUsage' } }

	{macro main ( )}
		{@aria:NumberField {
			label : "Mandatory Field:",
			labelPos : "left",
			labelWidth : 100,
			width : 300,
			block : true,
			mandatory : true,
			bind : {
				value : {
					inside : data,
					to : "value"
				}
			}
		}/}

		<br />

		{@aria:NumberField {
			label : "Number Field:",
			labelPos : "left",
			labelWidth : 100,
			width : 300,
			helptext : "Enter a number",
			block : true,
			bind : {
				value : {
					inside : data,
					to : "value"
				}
			}
		}/}

		<br />

		{@aria:NumberField {
			label : "Disabled Field:",
			labelPos : "left",
			labelWidth : 100,
			width : 300,
			block : true,
			disabled : true,
			bind : {
				value : {
					inside : data,
					to : "value"
				}
			}
		}/}

		<br />

		{@aria:NumberField {
			label : "Currency Field:",
			labelPos : "left",
			labelWidth : 100,
			width : 300,
			helptext : "Enter a number",
			block : true,
			pattern : "\u00A4#,###0.000",
			bind : {
				value : {
					inside : data,
					to : "value"
				}
			}
		}/}

    {/macro}
{/Template}
