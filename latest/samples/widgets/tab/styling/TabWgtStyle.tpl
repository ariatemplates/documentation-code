{Template {
  $classpath : 'samples.widgets.tab.styling.TabWgtStyle',
  $hasScript : false } }

  {macro main ( )}
    <div id="tabBar" style="position:relative">
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
    {@aria:Tab {
        sclass: "std",
        tabId: "Tab2",
        disabled: true}}
            {@aria:Text {
                 text: "Long Tab Name 2",
                 ellipsis: "...",
                 width : 50,
                 ellipsisLocation: "right"
             }/}
    {/@aria:Tab}
    {@aria:Tab {
        sclass : "std",
        tabId: "Tab3",
        disabled: true }}
            {@aria:Text {
                 text: "Long Tab Name 3",
                 ellipsis: "...",
                 width : 50,
                 ellipsisLocation: "right"
             }/}
    {/@aria:Tab}
    <div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px">
    {@aria:TabPanel {block:true, id: "myid", margins: "0 0 0 0", selectedTab : "Tab1"}}
        <h3>Mouse over the tab will show the tab name</h3>
        <p>The content is specified in the Tab panel itself and not called from a macro.</p>
    {/@aria:TabPanel}
    <div></div>
  {/macro}

{/Template}
