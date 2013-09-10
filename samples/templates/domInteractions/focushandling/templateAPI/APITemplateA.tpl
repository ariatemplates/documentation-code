{Template {
	$classpath:'samples.templates.domInteractions.focushandling.templateAPI.APITemplateA',
	$hasScript:false
}}

	{macro main()}
		<b>Template A</b>
		<ul>
			<li>
			{@aria:TextField {
					id : "txtf0",
					label : "TextField ",
					labelWidth:100,
					width:300
				} /}
			</li>
			<li>
			{@aria:NumberField {
					id: "nf0",
					label: "NumberField",
					labelWidth:100,
					width:300
				}/}
			</li>
			<li>
			{@aria:DateField {
					id: "df0",
					label: "DateField",
					labelWidth:100,
					width:300
				}/}
			</li>
		</ul>
	{/macro}

{/Template}