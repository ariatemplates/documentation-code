{Template {
  $classpath : "ariadoc.snippets.widgets.tab.Snippet",
  $hasScript: false } }

  {macro main ( )}

   ////#wgtTabSnippet1
        {@aria:Tab {
            tabId: "Tab1",
            selectedTab: "Tab1" }}
                Tab1
        {/@aria:Tab}
    ////#wgtTabSnippet1

    ////#wgtTabSnippet2
        {@aria:Tab {
            sclass: "std",
            tabId: "Tab1",
            selectedTab: "Tab1" }}
                {@aria:Text {
                    text: "Long Tab Name 1",
                    ellipsis: "...",
                    width : 50,
                    ellipsisLocation: "right"
                }/}
        {/@aria:Tab}
    ////#wgtTabSnippet2

    ////#wgtTabSnippet3
        {@aria:Tab {
            sclass: "std",
            tabId: "Tab1",
            bind: {
                selectedTab : {to: "tabValue" , inside: data}
            } }}
                Tab1
        {/@aria:Tab}
    ////#wgtTabSnippet3
    {/macro}

{/Template}