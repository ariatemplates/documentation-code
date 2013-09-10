{Template {
  $classpath:'samples.templates.domInteractions.focushandling.templateAPI.Template3',
  $hasScript: false
}}

	{macro main()}
		<div class="templateContainer">
			{@aria:Template {
					id:"A",
					defaultTemplate:'samples.templates.domInteractions.focushandling.templateAPI.APITemplateA',
					width:400
			} /}
		</div>
		<div class="templateContainer">
			{@aria:Template {
					id:"B",
					defaultTemplate:'samples.templates.domInteractions.focushandling.templateAPI.APITemplateB',
					width:400
			} /}
		</div>

	{/macro}

{/Template}