{Template {
  $classpath : "samples.widgets.passwordfield.Password"
}}
  {macro main()}

    {@aria:PasswordField {
      label : "Password",
      bind : {
        value : {
          inside : data,
          to : 'password'
        }
      },
      mandatory : true
    }/}

  {/macro}

{/Template}