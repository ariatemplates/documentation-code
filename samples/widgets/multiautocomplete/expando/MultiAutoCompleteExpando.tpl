{Template {
	$classpath : "samples.widgets.multiautocomplete.expando.MultiAutoCompleteExpando",
	$hasScript : true,
	$css: ["samples.widgets.multiautocomplete.expando.ExpandoCSS"]
}}

	{macro main()}
		{@aria:MultiAutoComplete{
			label:"With Max Options",
			width:480,
			labelWidth:150,
			resourcesHandler:getLCRangeHandler(),
			maxOptions:5
		}/}
		<br /><br /><br />
		{@aria:MultiAutoComplete{
			label:"With Expando Button",
			labelWidth:150,
			expandButton:true,
			freeText:false,
			width:500,
			resourcesHandler: getLCRangeHandler(),
			bind:{
			  "value":{
				  inside:data,
				  to:'expandoValue'
				}
			}
		}/}

		{section {
			id : "myFirstSection",
			macro : "mySectionMacro",
			type : "SPAN",
			bindRefreshTo : [{inside: data, to: "expandoValue"}]
		} /}
	{/macro}
	{macro mySectionMacro()}
		<ul class="ScheduleClass">
			{if data.expandoValue.length > 0}
				{for var i=0;i<data.expandoValue.length;i++}
					<li><span>${data.expandoValue[i].label}</span> <span class="second">${data.expandoValue[i].code}</span></li>
				{/for}
			{/if}
		</ul>
	{/macro}

{/Template}
