{Template {
  $classpath : 'samples.widgets.tab.tabpanel.TabPanelWgtMacro',
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
		{@aria:TabPanel {
			macro:"myTabPanel",
			bind:{
				selectedTab:{
					to: "tabValue",
					inside: data
				}
			}
		}/}
    </div></div>
  {/macro}
  {macro myTabPanel ( )}
		<h3>${data.tabValue} macro content</h3>
		<p>Tab panel widget is not used as a container</p>
  {/macro}
{/Template}
