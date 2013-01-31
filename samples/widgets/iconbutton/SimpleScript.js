Aria.tplScriptDefinition({
	$classpath : "samples.widgets.iconbutton.SimpleScript",
	$prototype : {
		/**
		 * Callback for the click event on the first button.
		 * @param {aria.DomEvent} evt Click event
		 */
		buttonClick : function (evt) {
			alert("onClick callback event fired");
		},


	}
});