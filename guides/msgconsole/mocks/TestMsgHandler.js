Aria.classDefinition({
	$classpath : 'ariadoc.guides.msgconsole.mocks.TestMsgHandler',
	$extends : 'aria.core.IOFilter',
	$constructor : function () {
		this.$IOFilter.constructor.call(this);
	},
	$prototype : {
		/**
		 * Method called before a request is sent to get a chance to change its arguments
		 * @param {aria.core.RequestMgr.FilterRequest} req
		 */
		onRequest : function (req) {
			var rf = null; // response file
			rf = "msg0.xml";

			if (req.sender.requestObject.actionName == "getMessages") {
				var idx=(req.sender.requestData.count%15);

				rf = "msg"+idx+".xml";
			}

			if (rf) {
				this.redirectToFile(req, "ariadoc/guides/msgconsole/mocks/" + rf);
			}
		}
	}
});