{Template {
  $classpath : "samples.widgets.autocomplete.onchange.OnChange",
  $hasScript : true,
  $css : ["samples.widgets.autocomplete.onchange.OnChangeStyle"]
}}

  {macro main()}
    <div {id "notify" /} class="hidden changeAlert">
      <p>The AutoComplete value has changed!</p>
    </div>

    {@aria:AutoComplete {
      resourcesHandler : getHandler(1),
      helptext : "Type to search a nation",
      onchange : {
        fn : onChange
      }
    }/}

  {/macro}

{/Template}