{Template {
	$classpath : "ariadoc.snippets.widgets.numberfield.Snippet"
}}

	{macro main ( )}

	////#wgtNumberField
		{@aria:NumberField {
			label : "Please enter a decimal number:",
			mandatory : true,
			errorMessages : [ "Please type in a number" ]
		}/}
	////#wgtNumberField

	{/macro}

{/Template}
