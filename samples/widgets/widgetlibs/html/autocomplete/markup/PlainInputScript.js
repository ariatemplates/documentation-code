Aria.tplScriptDefinition({
	$classpath : "samples.widgets.widgetlibs.html.autocomplete.markup.PlainInputScript",
	$dependencies : ["samples.widgets.widgetlibs.html.autocomplete.common.Resources", "aria.html.controllers.Suggestions"],
	$prototype : {
		$dataReady : function () {
			this.suggestionsController = Aria.getClassInstance("aria.html.controllers.Suggestions");

			this.suggestionsController.setResourcesHandler(Aria.getClassInstance("samples.widgets.widgetlibs.html.autocomplete.common.Resources"));
		},

		type : function (evt) {
			this.suggestionsController.suggestValue(evt.target.getValue());
		},

		select : function (evt, suggestion) {
			evt.preventDefault(true);

			this.suggestionsController.setSelected(suggestion);


			this.$getElementById("inputField").setValue(suggestion.label);
		},

		closeSuggestions : function (evt) {
			evt.preventDefault(true);

			this.suggestionsController.empty();
		},

		cancelValue : function (evt) {
			evt.preventDefault(true);

			this.suggestionsController.setSelected(null);
			this.$getElementById("inputField").setValue("");
		}
	}
});