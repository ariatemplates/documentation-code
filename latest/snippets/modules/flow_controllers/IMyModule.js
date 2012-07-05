Aria.interfaceDefinition({
 	$classpath : 'snippets.modules.flow_controllers.IMyModule',
 	$extends : 'aria.templates.IModuleCtrl',
 	$interface: {
 		/**
 		 * Get the flight availability. This function is asynchronous. Its first parameter is
 		 * the callback (called when results are available).
 		 * Arguments will be retrieved from the searchQuery section of the data model.
 		 * Response will be set in one of the availability sections of the datamodel.
 		 * Note: this method will automatically call validateSearchQuery() first.
 		 **/
 		getFlightAvailability: {
            $type: "Function",
 			$callbackParam: 0
 		},

 		/**
 		 * Get the flight information for the flights passed as argument.
 		 * The result will be set in the flightInfo[flightNbr] section of the datamodel
 		 * @param flightNbr {number} the flight number corresponding to the information to retrieve
 		 */
 		getFlightInfo: function (flightNbr) {},

 		/**
 		 * Validates the search query part of the data model and updates errors meta-data that can
 		 * be directly bound to the fields
 		 **/
 		validateSearchQuery: function() {}
 	}
 });
