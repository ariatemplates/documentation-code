/**
 * Sample widget library.
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.customSlider.SampleWidgetLib',
	$extends : 'aria.widgetLibs.WidgetLib',
	$singleton : true,
	$prototype : {
		/**
		 * Map of all the widgets in the library. Keys in the map are widget names as they can be used in templates.
		 * Values are the corresponding classpaths.
		 * @type {Object}
		 */
		widgets : {
			"Slider" : "samples.widgets.customSlider.widget.Slider"
		}
	}
});