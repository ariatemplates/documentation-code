{Template {
  $classpath:'samples.templates.domInteractions.focushandling.templateAPI.APIMainTemplate',
  $hasScript: true,
  $css:['samples.templates.domInteractions.focushandling.MainTemplateCSS']
}}

	{macro main()}

		<span style="display:block;">Click the refresh button then click on an element in either Template A or Template B and after a 2 second delay the root template will be refreshed.  The focused element should remain focused after the refresh.</span>

		<br><br>
		<b>Template Hierarchy</b>:
		<ul>
			<li>APIMainTemplate</li>
			<ul>
				<li>Template 1</li>
				<ul>
					<li>Template 2</li>
					<ul>
						<li>Template 3</li>
						<ul>
							<li>Template A</li>
							<li>Template B</li>
						</ul>
					</ul>
				</ul>
			</ul>
		</ul>

		{@aria:Template {
				id:"1",
				defaultTemplate:'samples.templates.domInteractions.focushandling.templateAPI.Template1',
				width:800
		} /}

		<div>
			{@aria:Button {
					label:"refresh in 2 seconds..",
					onclick:"refresh",
					width:200
			} /}
		</div>

	{/macro}

{/Template}