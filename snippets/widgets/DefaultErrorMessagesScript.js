Aria.tplScriptDefinition({
	$classpath : "snippets.widgets.DefaultErrorMessagesScript",
	$dependencies : ["aria.core.AppEnvironment", "aria.resources.handlers.LCResourcesHandler"],
	$prototype : {
		$dataReady : function () {
			var resourcesHandler = new aria.resources.handlers.LCResourcesHandler();
			resourcesHandler.setSuggestions([]);
			this.data.resourcesHandler = resourcesHandler;

			////#datamodel
			this.data.defaultErrorMessages = {};
			this.data.defaultErrorMessages["DateField"] = {
				"validation" : "Bound local default error message for DateField's validation.",
				"minValue" : "Bound local default error message for DateField's minimum date validation.",
				"maxValue" : "Bound local default error message for DateField's maximum date validation."
			};
			////#datamodel

			this.data.defaultErrorMessages["NumberField"] = {
				"validation" : "Bound local default error message for NumberField's validation."
			};

			this.data.defaultErrorMessages["TimeField"] = {
				"validation" : "Bound local default error message for TimeField's validation."
			};

			this.data.defaultErrorMessages["AutoComplete"] = {
				"validation" : "Bound local default error message for AutoComplete's validation."
			};
		},

		setGlobalMessages : function() {
			////#global
			aria.core.AppEnvironment.setEnvironment({
				"widgetSettings" : {
					"defaultErrorMessages" : {
						"DateField" : {
							"validation" : "Global default error message for DateField's validation.",
							"minValue" : "Global default error message for DateField's minimum date validation.",
							"maxValue" : "Global default error message for DateField's maximum date validation."
						}
					}
				}
			}, null, true);
			////#global
		}
	}
});
