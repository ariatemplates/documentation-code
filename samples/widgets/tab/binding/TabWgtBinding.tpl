{Template {
	$classpath : 'samples.widgets.tab.binding.TabWgtBinding'
}}

	{macro main( )}
		<div id="tabBar" style="position:relative">
			{@aria:Tab {
				tabId: "Tab1",
				bind: {
					selectedTab : {
						to: "tabValue",
						inside: data
					}
				}
			}}
				Tab1
			{/@aria:Tab}
			{@aria:Tab {
				tabId: "Tab2",
				bind: {
					selectedTab : {
						to: "tabValue",
						inside: data
					}
				}
			}}
				Tab2
			{/@aria:Tab}
			{@aria:Tab {
				tabId: "Tab3",
				bind: {
					selectedTab : {
						to: "tabValue",
						inside: data
					}
				}
			}}
				Tab3
			{/@aria:Tab}

			<div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px">
			{@aria:TabPanel {
				id : "myTabPanel",
				macro : "myTabPanelContent",
				bind : {
	        		selectedTab : {
	        			to : "tabValue",
	        			inside: data
	        		}
	        	}
	        }/}
			<div>
		</div>
	{/macro}

	{macro myTabPanelContent()}
		<h3>${data.tabValue} Non Macro content</h3>
	{/macro}

{/Template}
