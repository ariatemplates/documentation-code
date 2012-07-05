Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.multiselect.SampleUsageScript',
	$constructor : function () {
		/**
		 * Name of the element containing the displayed list items
		 * @protected
		 * @type {String}
		 */
		this._refContainer = "myList";

		/**
		 * If necessary, shift between the item index and the child index in the dom
		 * @protected
		 * @type {Number}
		 */
		this._itemShift = 1;
	},
	$prototype : {

		/**
		 * Event handler to notify the module controller when an item is clicked
		 * @param {} evt
		 */
		onchange : function (evt, item) {

		}
	}
});
