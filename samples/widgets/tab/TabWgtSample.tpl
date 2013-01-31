{Template {
  $classpath : 'samples.widgets.tab.TabWgtSample',
  $hasScript : false } }

  {macro main ( )}
    <div id="tabBar" style="position:relative">
      {@aria:Tab {
        sclass: "std",
        tabId: "Tab1",
        selectedTab: "Tab1" }}
            Tab1
        {/@aria:Tab}
    {@aria:Tab {
        sclass: "std",
        tabId: "Tab2",
        disabled: true}}
            Tab2
    {/@aria:Tab}
    {@aria:Tab {
        sclass : "std",
        tabId: "Tab3",
        disabled: true }}
            Tab3
    {/@aria:Tab}
    <div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px">
    {@aria:TabPanel {block:true, id: "myid", margins: "0 0 0 0", selectedTab : "Tab1"}}
        <h3>A Tab 1 Non Macro content</h3>
        <p>The content is specified in the Tab panel itself and not called from a macro.</p>
    {/@aria:TabPanel}
    <div></div>
  {/macro}

{/Template}
