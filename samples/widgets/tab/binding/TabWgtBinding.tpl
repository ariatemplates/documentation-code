{Template {
  $classpath : 'samples.widgets.tab.binding.TabWgtBinding',
  $hasScript : false } }

  {macro main ( )}
    <div id="tabBar" style="position:relative">
      {@aria:Tab {
        sclass: "std",
        tabId: "Tab1",
        bind: {
            selectedTab : {to: "tabValue" , inside: data}
        } }}
            Tab1
        {/@aria:Tab}
    {@aria:Tab {
        sclass: "std",
        tabId: "Tab2",
        bind: {
            selectedTab : {to: "tabValue" , inside: data}
        }}}
            Tab2
    {/@aria:Tab}
    {@aria:Tab {
        sclass : "std",
        tabId: "Tab3",
        bind: {
            selectedTab : {to: "tabValue" , inside: data}
        } }}
            Tab3
    {/@aria:Tab}

    <div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px">
        {@aria:TabPanel {id:"myTabPanel", bind:{selectedTab:{to: "tabValue" , inside: data}}}}
            <h3>${data.tabValue} Non Macro content</h3>
            <p>The content is specified in the Tab panel itself and not called from a macro.</p>
        {/@aria:TabPanel}
    <div></div>
  {/macro}

{/Template}
