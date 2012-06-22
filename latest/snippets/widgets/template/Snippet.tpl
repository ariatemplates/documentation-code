{Template {
  $classpath : "ariadoc.snippets.widgets.template.Snippet",
  $hasScript: false } }

  {macro main ( )}

   ////#wgtTemplateSnippet1
        {@aria:Template {
            id:"myFirstTemplate",
            defaultTemplate: 'ariadoc.samples.widgets.template.FirstSubTemplate'
        } /}
    ////#wgtTemplateSnippet1

    ////#wgtTemplateSnippet2
        {@aria:Template {
            id:"mySecondTemplate",
            defaultTemplate: "ariadoc.samples.widgets.template.SecondSubTemplate",
            data: {
              myMessage : "This is just a message from the parent template."
            }
        } /}
    ////#wgtTemplateSnippet2


    {/macro}

{/Template}