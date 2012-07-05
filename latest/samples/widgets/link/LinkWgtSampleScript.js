Aria.tplScriptDefinition({
	$classpath : "samples.widgets.link.LinkWgtSampleScript",
	$prototype : {
		/**
		 * Callback for the click event on the first button.
		 * @param {aria.DomEvent} evt Click event
		 */
		linkClicked : function (evt) {
			alert("onClick callback event fired");
		},


	}
});