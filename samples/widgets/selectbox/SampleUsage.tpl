{Template {
	$classpath : 'samples.widgets.selectbox.SampleUsage'
}}

	{macro main ( )}

		{@aria:SelectBox {
			label : "All Countries: ",
			labelWidth : 220,
			options : data.countries,
			bind : {
				value : {
					to : "country",
					inside : data.widgets
				}
			}
		}/}

		<br />

		{@aria:SelectBox {
			label : "All Countries (read-only): ",
			labelWidth : 220,
			readOnly : true,
			options : data.countries,
			bind : {
				value : {
					to : "country",
					inside : data.widgets
				}
			}
		}/}

		<br />

		{@aria:SelectBox {
			label : "All Countries (disabled): ",
			labelWidth : 220,
			disabled : true,
			options : data.countries,
			bind : {
				value : {
					to : "country",
					inside : data.widgets
				}
			}
		}/}

	{/macro}

{/Template}
