{Template {
  $classpath : "samples.widgets.autocomplete.HighlightAutofill",
  $hasScript : true
}}

  {macro main()}

    {@aria:AutoComplete {
      label : "autoFill Enabled",
      labelWidth: 150,
      resourcesHandler : getHandler(),
      autoFill : true
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "autoFill Disabled",
      labelWidth: 150,
      resourcesHandler : getHandler(),
      autoFill : false
    }/}

  {/macro}

{/Template}