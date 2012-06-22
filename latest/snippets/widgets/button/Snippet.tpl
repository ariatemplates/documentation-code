{Template {
  $classpath: "ariadoc.snippets.widgets.button.Snippet",
  $hasScript : true
}}

  {macro main()}
  
    ////#wgtButtonAction
    {@aria:Button {
      label : "Submit",
      onclick : {
        fn : buttonClick
      }
    }/}
    ////#wgtButtonAction
    
  {/macro}

{/Template}