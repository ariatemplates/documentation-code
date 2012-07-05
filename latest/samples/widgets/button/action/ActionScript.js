Aria.tplScriptDefinition({
	$classpath : "samples.widgets.button.action.ActionScript",
	$prototype : {
		/**
		 * Callback for the click event on the first button.
		 * @param {aria.DomEvent} evt Click event
		 */
		buttonClick : function (evt) {
			alert("I felt your click");
		},

		/**
		 * Callback for the click event on the first button.
		 * @param {aria.DomEvent} evt Click event
		 * @param {Object} args Additional arguments
		 */
		countClicks : function (evt, args) {
			args.times += 1;

			alert("You clicked me " + args.times + " times");
		}
	}
});