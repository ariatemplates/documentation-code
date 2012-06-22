{Template {
	$classpath : "ariadoc.snippets.widgets.timefield.Snippet"
}}

	{macro main ( )}

	////#wgtTimeField
		{@aria:TimeField {
			label : "Departure time (short format: hh:mm):",
			block : true,
			pattern : aria.core.AppEnvironment.getTimeFormats().shortFormat
		}/}
	////#wgtTimeField

	{/macro}

{/Template}
