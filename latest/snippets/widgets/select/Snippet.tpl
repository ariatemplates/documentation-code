{Template {
	$classpath : "ariadoc.snippets.widgets.select.Snippet" } }

	{macro main ( )}

		////#wgtSelectField
		{@aria:Select {
			options : data.countries,
			bind : {
				value : {
					to : country,
					inside : data.widgets
				}
			}
		}/}
		////#wgtSelectField

	{/macro}

{/Template}
