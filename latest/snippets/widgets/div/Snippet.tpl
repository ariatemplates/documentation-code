{Template {
    $classpath : "snippets.widgets.div.Snippet"
}}

    {macro main ( )}

        ////#wgtDivAction
        {@aria:Div {
            sclass : "basic",
            width : 500,
            height : 200
        }}
            <h1>Sample div</h1>
        {/@aria:Div}
        ////#wgtDivAction

    {/macro}

{/Template}