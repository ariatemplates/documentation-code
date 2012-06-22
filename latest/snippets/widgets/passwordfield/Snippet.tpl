{Template {
  $classpath: "ariadoc.snippets.widgets.passwordfield.Snippet"
}}

  {macro main()}
  
    ////#wgtPasswordField
    {@aria:PasswordField {
      label : "Your password: ",
      bind : {
        value : { 
          inside : data,
          to: "password"
        }
      }
    }/}
    ////#wgtPasswordField
    
  {/macro}

{/Template}
