{Template {
    $classpath: "snippets.widgets.passwordfield.Snippet"
}}

    {macro main()}

        {var data={password:""}/}

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
