{Template {
  $classpath: "samples.widgets.calendar.ranges.Sample",
  $css: ["samples.widgets.calendar.ranges.SampleStyle"],
  $hasScript : true
}}

  {macro main()}
    Some dates in the following calendar have a different style, configured
    through the "ranges" property and some CSS rules: <br><br>

    {@aria:Calendar {
      ranges: getRanges()
    }/}
  {/macro}

{/Template}