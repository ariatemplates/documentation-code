{Template {
	$classpath:'samples.templates.domInteractions.focushandling.templateAPI.APITemplateB',
	$hasScript: false
}}

	{macro main()}
		<b>Template B</b>
		<ul>
			<li>
				{@aria:DatePicker {
					id: "dp0",
					label: "DatePicker",
					labelWidth:100,
					width:300
				}/}
			</li>
			<li>
				{@aria:TimeField {
					id: "tf0",
					width:300,
					label: "TimeField",
					labelWidth:100
				}/}
			</li>
		</ul>
	{/macro}

{/Template}