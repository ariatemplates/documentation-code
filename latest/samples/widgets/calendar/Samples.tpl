{Template {
  $classpath: "samples.widgets.calendar.Samples"
}}

  {macro main()}
  <table>
	<tr valign="top">
		<td>Basic Calendar </td>
		<td>Calendar with  <b>dayOfWeekLabelFormat</b> set </td>
	</tr>
	<tr valign="top">
		<td>
			{@aria:Calendar {
				numberOfUnits: 1
			}/}
		</td>
		<td>
			{@aria:Calendar {
				numberOfUnits: 1,
				dayOfWeekLabelFormat:"EEE"
			}/}
		</td>
	</tr>
</table>


  {/macro}

{/Template}