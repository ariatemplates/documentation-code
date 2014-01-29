Aria.interfaceDefinition({
    $classpath : 'samples.customization.flow.sampleflowmodule1.IModule',
    $extends : 'aria.templates.IModuleCtrl',
    $interface : {
        /**
         * Get the flight availability. This function is asynchronous. Arguments will be retrieved from the searchQuery
         * section of the data model. Response will be set in one of the availability sections of the datamodel. Note:
         * this method will automatically call validateSearchQuery() first.
         * @param {aria.core.JsObject.Callback} cb callback to be called when results are available
         */
        getFlightAvailability : {
            $type : "Function",
            $callbackParam: 1
        },

        /**
         * Get the flight information for the flights passed as argument. This function is asynchronous. The result will
         * be set in the flightInfo[flightNbr] section of the datamodel
         * @param {Number} flightNbr the flight number corresponding to the information to retrieve
         * @param {aria.core.JsObject.Callback} cb callback to be called when flight information is available
         */
        getFlightInfo : {
            $type : "Function",
            $callbackParam : 1
        },

        /**
         * Validates the search query part of the data model and updates errors meta-data that can be directly bound to
         * the fields
         */
        validateSearchQuery : function () {}
    }
});
