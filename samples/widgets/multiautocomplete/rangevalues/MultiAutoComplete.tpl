{Template {
	$classpath : "samples.widgets.multiautocomplete.rangevalues.MultiAutoComplete",
	$hasScript : true,
}}

	{macro main()}
		<br/>
		{@aria:MultiAutoComplete{
			label:"Range Selection",
			labelWidth:130,
			width:350,
			resourcesHandler: getLCRangeHandler()
		}/}

	{/macro}

{/Template}
