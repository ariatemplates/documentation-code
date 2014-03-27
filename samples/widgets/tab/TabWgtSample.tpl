{Template {
	$classpath : 'samples.widgets.tab.TabWgtSample'
}}

	{macro main( )}
		<div style="position:relative">
			{@aria:Tab {
				tabId : "Tab1",
				selectedTab : "Tab1"
			}}
				Tab1
			{/@aria:Tab}

			{@aria:Tab {
				tabId : "Tab2",
				disabled : true
			}}
				Tab2
			{/@aria:Tab}

			{@aria:Tab {
				tabId : "Tab3",
				disabled : true
			}}
				Tab3
			{/@aria:Tab}

			<div style="border:#DEE6F0 1px solid; position: relative; top: -2px; margin-left:1px">
			{@aria:TabPanel {
				block : true,
				id: "myid",
				macro : "panelContent",
				margins: "0 0 0 0",
				selectedTab : "Tab1"
			}/}
			<div>
		</div>
	{/macro}

	{macro panelContent()}
		<h3>A Tab 1 Non Macro content</h3>
	{/macro}

{/Template}
