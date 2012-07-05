{Template {
	$classpath : 'samples.widgets.widgetlibs.slider.DemoTemplate',

	// Here is how a custom library is referenced from a template.
	// Alternatively, for the library to be available to all templates
	// of the application by default (as the aria library is)
	// it is possible to add the custom library in the AppEnvironment
	// (through the defaultWidgetLibs property).

	$wlibs : {
		'sample' : 'samples.widgets.widgetlibs.SampleWidgetLib'
	}

}}

	{macro main()}
		Here is the slider with its default configuration:<br><br>

		{@sample:Slider {}/} // Note the use of the prefix 'sample' declared in $wlibs in the template header.

		<br><br>Here are several sliders bound together and with a Text widget from the default library:<br><br>

		{@sample:Slider {
			bindValue: {
				to: "value",
				inside: data
			},
			width: 100
		}/}
		{@sample:Slider {
			bindValue: {
				to: "value",
				inside: data
			},
			width: 300
		}/}
		{@sample:Slider {
			bindValue: {
				to: "value",
				inside: data
			},
			width: 300
		}/}<br>
		Value: {@aria:Text {
			bind: {
				text: {
					to: "value",
					inside: data
				}
			}
		}/}

	{/macro}

{/Template}