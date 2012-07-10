{Template {
    $classpath : "snippets.widgets.tabpanel.Snippet"
}}

    {macro main()}

        {var data={tabValue:0}/}

        ////#wgtTabPanelSnippet1
        {@aria:TabPanel {
            macro: "myTabPanel",
            bind: {
                selectedTab : {to: "tabValue" , inside: data}
            }
        }/}
        ////#wgtTabPanelSnippet1

    {/macro}

    {macro myTabPanel()}
    {/macro}

{/Template}