{Template {
    $classpath : "snippets.widgets.textfield.Snippet"
}}

    {macro main()}

        {var data={"username":""}/}

        ////#wgtTextField
        {@aria:TextField {
            label : "Please enter your username:",
            bind : {
                value : {
                    inside : data,
                    to : "username"
                }
            }
        }/}
        ////#wgtTextField

    {/macro}

{/Template}
