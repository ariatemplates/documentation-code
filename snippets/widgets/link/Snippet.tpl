{Template {
    $classpath : "snippets.widgets.link.Snippet"
}}

    {macro main()}

        ////#wgtLinkSnippet1
        {@aria:Link {
            id:"myLink",
            label : "link label",
            margins : "30 x x 30"
        }/}
        ////#wgtLinkSnippet1

        ////#wgtLinkSnippet2
        {@aria:Link {
            id:"anotherLink",
            label : "link label",
            margins : "30 x x 30",
            onclick : "linkClicked"
        }/}
        ////#wgtLinkSnippet2

    {/macro}

{/Template}