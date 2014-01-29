Aria.classDefinition({
    $classpath : 'samples.customization.flow.flows.MyModule',
    $extends : 'aria.templates.ModuleCtrl',
    $implements : ['samples.customization.flow.flows.IMyModule'],
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
        this._data = {
            search : {}
        };
    },
    $prototype : {
        $publicInterfaceName : 'samples.customization.flow.flows.IMyModule',
        $hasFlowCtrl : true,

        /**
         * Get the flight availability. This function is asynchronous. Arguments will be retrieved from the searchQuery
         * section of the data model. Response will be set in one of the availability sections of the datamodel. Note:
         * this method will automatically call validateSearchQuery() first.
         * @param {aria.core.JsObject.Callback} cb callback to be called when results are available
         */
        getFlightAvailability : function (cb) {
            this.validateSearchQuery();
            var dataToSend = this.json.copy(this._data.search);
            this.submitJsonRequest("flightAvail", dataToSend, {
                fn : "_receivedAvailFromServer",
                args : {
                    callback : cb,
                    lastSearch : dataToSend
                }
            });
        },

        _receivedAvailFromServer : function (res, args) {
            var data = res.response;
            this._data.lastSearch = args.lastSearch;
            this.json.inject(data, this._data);
            // at the end, call the callback:
            this.$callback(args.callback);
        },

        /**
         * Get the flight information for the flights passed as argument. This function is asynchronous. The result will
         * be set in the flightInfo[flightNbr] section of the datamodel
         * @param {Number} flightNbr the flight number corresponding to the information to retrieve
         * @param {aria.core.JsObject.Callback} cb callback to be called when flight information is available
         */
        getFlightInfo : function (flightNbr, cb) {
            /* do some checks */
            var dataToSend = {
                flightNbr : flightNbr
            };
            this.submitJsonRequest("flightInfo", dataToSend, {
                fn : "_receivedInfoFromServer",
                args : {
                    callback : cb
                }
            });
        },

        _receivedInfoFromServer : function (res, args) {
            var data = res.response;
            this.json.inject(data, this.data);

            // at the end, call the callback:
            this.$callback(args.callback);
        },

        /**
         * Validates the search query part of the data model and updates errors meta-data that can be directly bound to
         * the fields
         */
        validateSearchQuery : function () {}
    }
});
