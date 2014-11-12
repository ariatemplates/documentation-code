{Template {
  $classpath: "samples.widgets.rangecalendar.ranges.Sample",
  $css: ["samples.widgets.rangecalendar.ranges.SampleStyle"],
  $hasScript : true
}}

  {macro main()}
    Some dates in the following range calendar have a different style, configured
    through the "ranges" property and some CSS rules: <br><br>

    {@aria:RangeCalendar {
      ranges: getRanges()
    }/}
  {/macro}

{/Template}