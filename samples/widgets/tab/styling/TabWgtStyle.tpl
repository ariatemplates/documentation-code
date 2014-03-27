{Template {
	$classpath : 'samples.widgets.tab.styling.TabWgtStyle'
}}

	{macro main( )}
		<div id="tabBar" style="position:relative">
			{@aria:Tab {
				tabId : "Tab1",
				selectedTab : "Tab1"
			}}
				{@aria:Text {
					text : "Long Tab Name 1",
					ellipsis : "...",
					width : 50,
					ellipsisLocation : "right"
				}/}
			{/@aria:Tab}

			{@aria:Tab {
				tabId : "Tab2",
				disabled : true
			}}
				{@aria:Text {
					text : "Long Tab Name 2",
					ellipsis : "...",
					width : 50,
					ellipsisLocation : "right"
				}/}
			{/@aria:Tab}

			{@aria:Tab {
				tabId : "Tab3",
				disabled : true
			}}
				{@aria:Text {
					text : "Long Tab Name 3",
					ellipsis : "...",
					width : 50,
					ellipsisLocation : "right"
				}/}
			{/@aria:Tab}

			<div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px;">
				{@aria:TabPanel {
					block : true,
					id : "myid",
					macro : "panelContent",
					margins : "0 0 0 0",
					selectedTab : "Tab1"
				}/}
			<div>
		</div>
	{/macro}

	{macro panelContent()}
		<h3>Mouse over the tab will show the tab name</h3>
	{/macro}

{/Template}
