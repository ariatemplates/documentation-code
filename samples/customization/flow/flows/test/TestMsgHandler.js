/**
 * Test filter used to redirect live requests to static response files
 */

Aria.classDefinition({
    $classpath : 'samples.customization.flow.flows.test.TestMsgHandler',
    $extends : 'aria.core.IOFilter',
    $prototype : {
        /**
         * Method called before a request is sent to get a chance to change its arguments
         * @param {aria.core.CfgBeans.IOAsyncRequestCfg} req
         */
        onRequest : function (req) {
            var sender = req.sender;
            if (!sender || sender.classpath != "aria.modules.RequestMgr"
                    || sender.requestObject.moduleName.indexOf("samples.flows") != 0) {
                return;
            }
            if (sender.requestObject.actionName == "flightAvail") {
                if (sender.requestData.from && sender.requestData.from.iata == "NCE") {
                    this._redirectToFile(req, "samples/customization/flow/flows/test/FlightAvail.xml");
                } else {
                    this._redirectToFile(req, "samples/customization/flow/flows/test/EmptyFlightAvail.xml");
                }
            } else {
                this._redirectToFile(req, "samples/customization/flow/flows/test/EmptyAnswer.xml");
            }
        }
    }
});
