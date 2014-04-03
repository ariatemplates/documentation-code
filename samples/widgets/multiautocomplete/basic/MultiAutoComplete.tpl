{Template {
	$classpath : "samples.widgets.multiautocomplete.basic.MultiAutoComplete",
	$hasScript : true,
}}

	{macro main()}
		<br/>
		{@aria:MultiAutoComplete{
			label:"With Free Text",
			labelWidth:130,
			width:350,
			resourcesHandler: getLCRangeHandler()
		}/}

		<br /><br />
		{@aria:MultiAutoComplete{
			label:"Without Free Text",
			labelWidth:130,
			width:350,
			resourcesHandler: getLCRangeHandler(),
			freeText :false
		}/}

	{/macro}

{/Template}
