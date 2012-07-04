Aria.tplScriptDefinition({
	$classpath : "samples.widgets.iconbutton.binding.IconButtonBindingScript",
	$prototype : {
		/**
		 * Callback for the click event on the first button.
		 * @param {aria.DomEvent} evt Click event
		 */
		buttonClick : function (evt) {
			alert("Button enabled and event got fired");
		},


	}
});