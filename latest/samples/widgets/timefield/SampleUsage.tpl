{Template {
	$classpath : 'samples.widgets.timefield.SampleUsage' } }

	{macro main ( )}
		<div class = "panel dates" >
		  <p> <strong>9.51</strong>    updates to <strong>09:51</strong> </p>
		  <p> <strong>9.51 pm</strong> updates to <strong>21:51</strong> </p>
		  <p> <strong>9.5 pm</strong>  updates to <strong>21:05</strong> </p>
		  <p> <strong>9,5 pm</strong>  updates to <strong>21:05</strong> </p>
		</div>
		<fieldset class = "fieldsetDemo" >
		<legend> Please enter a time here : </legend>
		<p>
		{@aria:TimeField {
			label : "Departure time (short format: hh:mm)",
			labelPos : "left",
			labelAlign : "right",
			helptext : "Enter a departure time",
			width : 250,
			block : true,
			pattern : aria.core.AppEnvironment.getTimeFormats().shortFormat }/}
		</p>
		<p>
		{@aria:TimeField {
			label : "Arrival time (full format: hh:mm:ss)",
			labelPos : "left",
			labelAlign : "right",
			helptext : "Enter an arrival time",
			width : 250,
			block : true,
			pattern : aria.core.AppEnvironment.getTimeFormats().fullFormat }/}
		</p>
		<p>
		{@aria:TimeField {
			label : "Time with am/pm indicator(hh:mm:ss a)",
			labelPos : "left",
			labelAlign : "right",
			helptext : "Enter any time",
			width : 250,
			block : true,
			pattern : 'h:m:s a' }/}
		</p> </fieldset>
	{/macro}

{/Template}
