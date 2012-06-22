{Template {
	$classpath : "ariadoc.snippets.widgets.textfield.Snippet"
}}

	{macro main ( )}

	////#wgtTextField
		{@aria:TextField {
			label : "Please enter your username:",
			bind : {
				value : {
					inside : data,
					to : "username"
				}
			}
		}/}
	////#wgtTextField

	{/macro}

{/Template}
