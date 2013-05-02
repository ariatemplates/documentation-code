{Template {
	$classpath : 'samples.widgets.select.bindoptions.BindOptions',
	$hasScript: true
}}

	{macro main ( )}

	{@aria:Select {
		labelWidth:70,
		bind: {
			options : {
				to : "list",
				inside : data
			}
		}
	}/}
	
	{@aria:Button {
		label: "Add more choices",
		onclick: "changeList"
	  }/}

	{/macro}

{/Template}
