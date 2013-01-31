Aria.classDefinition({
	$classpath : "snippets.modules.controller.ModuleWithRequest",
	$extends : "aria.templates.ModuleCtrl",
	$dependencies : ["snippets.modules.controller.MyUrlService",
		"aria.modules.requestHandler.JSONRequestHandler"],
	$events : {
		"dataUpdated" : "[Self Explainatory]"
	},
	$constructor : function () {
		
		this.$ModuleCtrl.constructor.call(this);

		// module setting

		////#session
		// this session id can then be used during url construction
		this.setSession({
			id : "1234"
		});
		////#session

		////#params
		// this will ensure that any request contains a name parameter with value equal to John
		aria.modules.RequestMgr.addParam("name", "John");
		////#params

		this.$urlService = new snippets.modules.controller.MyUrlService();

		////#requestHandler
		// this handler evaluate the response received as a JavaScript object
		this.$requestHandler = new aria.modules.requestHandler.JSONRequestHandler();
		////#requestHandler

	},
	$prototype : {

		////#call
		/**
		 * Perform a server call
		 */
		saveDataToServer : function () {
			// save my data on the server
			this.submitJsonRequest("save", this.getData(), {
				fn : this._onRequest,
				scope : this
			});
		},

		/**
		 * Handler server response
		 * @param {aria.modules.RequestBeans.ProcessedResponse} res
		 */
		_onRequest : function (res) {
			// set the new data from the server on the datamodel if there was not server/call error
			if (!res.error) {
				this.setData(res.response);
			}
			this.$raiseEvent("dataUpdated");
		}
		////#call
	}
});