{Template {
	$classpath : "ariadoc.snippets.widgets.multiselect.Snippet"
}}

	{macro main ( )}

	////#wgtMultiSelect
		{@aria:MultiSelect {
			fieldDisplay : "code",
			fieldSeparator : '/',
			displayOptions : {
				// ...
			},			
			items : data.companies,	
			bind : {
				value : {
					to : company,
					inside : data.widgets
				}
			}
		}/}
	////#wgtMultiSelect

	{/macro}

{/Template}
