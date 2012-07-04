{Template {
  $classpath:'samples.templates.domInteractions.focushandling.MainTemplate',
  $hasScript: true,
  $css:['samples.templates.domInteractions.focushandling.MainTemplateCSS']
}}

	{macro main()}
		<div> <span>Focus on sub-template</span>
			{@aria:Button {
					label : "A",
					onclick : {
					   fn : "giveFocusTo",
					   args : {id : "A"}
					},
					width : 30
			} /}
			{@aria:Button {
					label : "B",
                    onclick : {
                       fn : "giveFocusTo",
                       args : {id : "B"}
                    },
					width : 30
			} /}
		</div>

		<div class="templateContainer">
		{@aria:Template {
				id : "A",
				defaultTemplate : 'samples.templates.domInteractions.focushandling.ATemplate',
				width : 300
		} /}
		</div>
		<div class="templateContainer">
		{@aria:Template {
				id : "B",
				defaultTemplate : 'samples.templates.domInteractions.focushandling.BTemplate',
				width : 300
		} /}
		</div>
	{/macro}

{/Template}