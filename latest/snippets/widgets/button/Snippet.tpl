{Template {
    $classpath: "snippets.widgets.button.Snippet"
}}

    {macro main()}

        {var buttonClick=function(){}/}

        ////#wgtButtonAction
        {@aria:Button {
            label : "Submit",
            onclick : {
                fn : "buttonClick",
                scope : this
            }
        }/}
        ////#wgtButtonAction

    {/macro}

{/Template}