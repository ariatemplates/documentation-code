{Template {
	$classpath : "snippets.widgets.DefaultErrorMessages",
	$hasScript : true
}}

{macro main()}
	{call static()/}
	{call bound()/}
{/macro}

{macro static()}
	{@aria:NumberField {
		defaultErrorMessages : {
			"validation" : "Local default error message for NumberField's validation."
		}
	}/}

	{@aria:TimeField {
		defaultErrorMessages : {
			"validation" : "Local default error message for TimeField's validation."
		}
	}/}

////#static
	{@aria:DateField {
		defaultErrorMessages : {
			"validation" : "Local default error message for DateField's validation.",
			"minValue" : "Local default error message for DateField's minimum date validation.",
			"maxValue" : "Local default error message for DateField's maximum date validation."
		}
	}/}
////#static

	{@aria:AutoComplete {
		resourcesHandler : this.data.resourcesHandler,
		defaultErrorMessages : {
			"validation" : "Local default error message for AutoComplete's validation."
		}
	}/}
{/macro}

{macro bound()}
	{@aria:NumberField {
		bind : {
			defaultErrorMessages : {
				inside : this.data.defaultErrorMessages,
				to : "NumberField"
			}
		}
	}/}

	{@aria:TimeField {
		bind : {
			defaultErrorMessages : {
				inside : this.data.defaultErrorMessages,
				to : "TimeField"
			}
		}
	}/}

////#bound
	{@aria:DateField {
		bind : {
			defaultErrorMessages : {
				inside : this.data.defaultErrorMessages,
				to : "DateField"
			}
		}
	}/}
////#bound

	{@aria:AutoComplete {
		bind : {
			defaultErrorMessages : {
				inside : this.data.defaultErrorMessages,
				to : "AutoComplete"
			}
		}
	}/}
{/macro}

{/Template}
