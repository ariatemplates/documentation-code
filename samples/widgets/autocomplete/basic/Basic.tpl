{Template {
  $classpath : "samples.widgets.autocomplete.basic.Basic",
  $hasScript : true
}}

  {macro main()}

    {@aria:AutoComplete {
      label : "3 letters threshold",
      labelWidth: 150,
      resourcesHandler : getNationsHandler(3)
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "1 letter threshold",
      labelWidth: 150,
      resourcesHandler : getNationsHandler(1)
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "1 letter threshold - expand button",
      labelWidth: 150,
      resourcesHandler : getNationsHandler(1),
      expandButton : true
    }/}

  {/macro}

{/Template}