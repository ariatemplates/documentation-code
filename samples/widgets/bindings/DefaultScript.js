Aria.tplScriptDefinition({
	$classpath : "samples.widgets.bindings.DefaultScript",
	$prototype : {
		/**
		 * Callback for the click event on the shout button.
		 * @param {aria.DomEvent} evt Click event
		 */
		shoutClick : function (evt) {
			if (this.data.name) {
				alert("Hello, " + this.data.name.toUpperCase() + "!");
			} else {
				alert("PLEASE, TELL ME YOUR NAME!");
			}
		}
	}
});
