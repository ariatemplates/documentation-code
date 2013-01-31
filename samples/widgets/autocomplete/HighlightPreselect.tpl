{Template {
  $classpath : "samples.widgets.autocomplete.HighlightPreselect",
  $hasScript : true
}}

  {macro main()}

    {@aria:AutoComplete {
      label : "Preselect strict",
      labelWidth: 150,
      resourcesHandler : getHandler(),
      preselect : "strict"
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "Preselect always",
      labelWidth: 150,
      resourcesHandler : getHandler(),
      preselect : "always"
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "Preselect none",
      labelWidth: 150,
      resourcesHandler : getHandler(),
      preselect : "none"
    }/}

  {/macro}

{/Template}