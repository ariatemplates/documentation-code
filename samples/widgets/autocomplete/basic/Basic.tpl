{Template {
  $classpath : "samples.widgets.autocomplete.basic.Basic",
  $hasScript : true
}}

  {macro main()}
    <p>sdadas</p>
    {@aria:AutoComplete {
      label : "3 letters thresholddsff",
      labelWidth: 170,
      resourcesHandler : getNationsHandler(3)
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "1 letter threshold",
      labelWidth: 170,
      resourcesHandler : getNationsHandler(1)
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "1 letter threshold - expand button",
      labelWidth: 170,
      resourcesHandler : getNationsHandler(1),
      expandButton : true
    }/}

  {/macro}

{/Template}