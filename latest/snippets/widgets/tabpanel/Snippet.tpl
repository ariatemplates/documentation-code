{Template {
  $classpath : "ariadoc.snippets.widgets.tabpanel.Snippet",
  $hasScript: false } }

  {macro main ( )}

   ////#wgtTabPanelSnippet1
        {@aria:TabPanel {
            macro: "myTabPanel",
            bind: {
                selectedTab : {to: "tabValue" , inside: data}
            }
        }/}
    ////#wgtTabPanelSnippet1


    {/macro}

{/Template}