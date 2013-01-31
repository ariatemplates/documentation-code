/**
 * A common class used to handle the resources for any AutoComplete widget that is used within the application.
 */
Aria.classDefinition({
	$classpath : "samples.common.autocomplete.AutoCompleteResourceHandler",
	$dependencies : [
		"aria.resources.handlers.LCResourcesHandler",
		"samples.common.autocomplete.ListOfNations",
		"samples.common.autocomplete.ListOfCities"],
	$singleton : true,
	$prototype : {
		/**
		 * Get an instance of the resource handler for nations.
		 * @param {Number} threshold Minimum search threshold for the resource handler
		 * @return {aria.resources.handlers.LCResourcesHandler} Label-Code handler
		 */
		getNationsHandler : function (threshold) {
			var handler = new aria.resources.handlers.LCResourcesHandler({
												labelKey: "label",
												codeKey: "code",
												sortingMethod: function (a, b) {
													return (a.mykey < b.mykey) ? 1 : (a.mykey > b.mykey) ? -1 : 0;
												}
											});
			handler.threshold = threshold;
			handler.setSuggestions(samples.common.autocomplete.ListOfNations.NATIONS);
			return handler;
		},

		/**
		 * Get an instance of the resource handler for cities.
		 * @param {Number} threshold Minimum search threshold for the resource handler
		 * @return {aria.resources.handlers.CitiesResourcesHandler} Cities handler
		 */
		getCitiesHandler : function (threshold) {
			var handler = new aria.resources.handlers.LCResourcesHandler();
			handler.threshold = threshold;
			handler.setSuggestions(samples.common.autocomplete.ListOfCities.CITIES);
			return handler;
		}
	}
});