{Template {
    $classpath : "snippets.widgets.template.Snippet"
}}

    {macro main()}

        ////#wgtTemplateSnippet1
        {@aria:Template {
            id:"myFirstTemplate",
            defaultTemplate: 'snippets.widgets.template.FirstSubTemplate'
        } /}
        ////#wgtTemplateSnippet1

        ////#wgtTemplateSnippet2
        {@aria:Template {
            id:"mySecondTemplate",
            defaultTemplate: "snippets.widgets.template.SecondSubTemplate",
            data: {
                myMessage : "This is just a message from the parent template."
            }
        }/}
        ////#wgtTemplateSnippet2

    {/macro}

{/Template}