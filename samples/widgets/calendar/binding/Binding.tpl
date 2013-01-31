{Template {
  $classpath: "samples.widgets.calendar.binding.Binding",
  $hasScript : true
}}

  {macro main()}
		{@aria:TextField {
			label:"Currently selected Date",
			bind:{
				value:{
					to:"fieldDate",
					inside:data
				}
			}
		} /}


<table>
	<tr>
		<td>
			{@aria:Calendar {
				numberOfUnits: 1,
				onchange: dateSelected,
				bind : {
					startDate: {
						to: "startDate",
						inside: data
					},
					value: {
						to: "value",
						inside: data
					}
				}
			}/}
		</td>
		<td>
			{@aria:Calendar {
				onchange: dateSelected,
				numberOfUnits: 1,
				defaultTemplate: "samples.widgets.calendar.binding.CustomizedCalendar",
				bind : {
					startDate: {
						to: "startDate",
						inside: data
					},
					value: {
						to: "value",
						inside: data
					}
				}
			}/}
		</td>
	</tr>
</table>
  {/macro}

{/Template}