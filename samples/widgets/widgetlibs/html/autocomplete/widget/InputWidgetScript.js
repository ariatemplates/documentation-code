Aria.tplScriptDefinition({
	$classpath : "samples.widgets.widgetlibs.html.autocomplete.widget.InputWidgetScript",
	$dependencies : ["samples.widgets.widgetlibs.html.autocomplete.common.Resources", "aria.html.controllers.Suggestions"],
	$prototype : {
		$dataReady : function () {
			this.suggestionsController = Aria.getClassInstance("aria.html.controllers.Suggestions");

			this.suggestionsController.setResourcesHandler(Aria.getClassInstance("samples.widgets.widgetlibs.html.autocomplete.common.Resources"));
		},

		select : function (evt, suggestion) {
			evt.preventDefault(true);

			this.suggestionsController.setSelected(suggestion);

			this.$json.setValue(this.data, "value", suggestion.label);
		},

		closeSuggestions : function (evt) {
			evt.preventDefault(true);

			this.suggestionsController.empty();
		},

		cancelValue : function (evt) {
			evt.preventDefault(true);

			this.suggestionsController.setSelected(null);

			this.$json.setValue(this.data, "value", "");
		}
	}
});