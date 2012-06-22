{Template {
  $classpath: "ariadoc.snippets.widgets.autocomplete.Snippet",
  $hasScript : true
}}

  {macro main()}
  
    ////#autocomplete
    {@aria:AutoComplete {
      label : "Tag :",
      resourcesHandler : getHandler()
    }/}
    ////#autocomplete
    
  {/macro}

{/Template}