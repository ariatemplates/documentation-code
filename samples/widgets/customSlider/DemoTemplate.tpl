{Template {
	$classpath : 'samples.widgets.customSlider.DemoTemplate',

	// Here is how a custom library is referenced from a template.
	// Alternatively, for the library to be available to all templates
	// of the application by default (as the aria library is)
	// it is possible to add the custom library in the AppEnvironment
	// (through the defaultWidgetLibs property).

	$wlibs : {
		'sample' : 'samples.widgets.customSlider.SampleWidgetLib'
	}

}}

	{macro main()}
		{call description()/}

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

	{macro description()}
		<p>Aria Templates comes with integrated widgets which can be used directly.
		However, if you need widgets which are not provided in the default library, it is possible for you to develop your own custom widgets, and to gather them in a new custom widget library.
		This page shows an example of a basic slider widget which is not in the default aria library, and which uses the following features of the Aria Templates framework: a CSS template, event delegation and listeners on the data model.</p>
	{/macro}

{/Template}