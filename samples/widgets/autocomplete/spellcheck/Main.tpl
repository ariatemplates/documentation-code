{Template {
  $classpath : "samples.widgets.autocomplete.spellcheck.Main",
  $hasScript : true
}}

  {macro main()}

    <h5>Type something like: Fraance (instead of France)</h5>
    {@aria:AutoComplete {
      label : "Make a mistake",
      labelWidth: 150,
      resourcesHandler: getNationsHandler(3),
      spellCheck : false
    }/}

    <br /><br />

    {@aria:AutoComplete {
      label : "Make another mistake",
      labelWidth: 150,
      resourcesHandler: getNationsHandler(3),
      spellCheck : false,
      sclass: "underlineError"
    }/}

    <br /><br />
    <span>(Look at the <code>COMMON_SPELLINGMISTAKES</code> static properties of the resources handler)</span>


  {/macro}

{/Template}
