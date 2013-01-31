Aria.tplScriptDefinition({
	$classpath : "samples.widgets.autocomplete.onchange.OnChangeScript",
	$dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {
		/**
		 * Get an instance of the resource handler. The list of nations is taken from the static in
		 * samples.common.autocomplete.ListOfNations
		 * @return {aria.resources.handlers.LCResourcesHandler} Label-Code handler
		 */
		getHandler : function (threshold) {
			var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(threshold);
		},

		/**
		 * Listener for the onchange Widget action.
		 * Animate a dialog that visually indicates changes in the autocomplete.
		 * Animation is done is CSS so it only works in modern browsers.
		 */
		onChange : function () {
			this.$getElementById("notify").setClassName("flash changeAlert");

			aria.core.Timer.addCallback({
				fn : this._animationEnd,
				scope : this,
				delay : 1200
			});
		},

		/**
		 * Hide the notification.
		 */
		_animationEnd : function () {
			this.$getElementById("notify").setClassName("hidden changeAlert");
		}
	}
});