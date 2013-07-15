Aria.tplScriptDefinition({
	$classpath : "samples.utils.jsonp.JsonPScript",
	$dependencies : ["aria.utils.Json"],
	$constructor : function () {
		/**
		 * Request identifier of the ongoing jsonp request
		 * @type String
		 */
		this.ongoingRequest = null;
	},
	$prototype : {
		__generateFakeIOCallback : function (reqId) {

		},

		doRequest : function () {
			// Since the JSON response come from a local file we are not sure about the request id,
			// add a function on IO to redirect to the correct request
			var that = this;
			aria.core.IO.__sampleResponse = function (json) {
				aria.core.transport.JsonP["_jsonp" + that.ongoingRequest].call(aria.core.transport.JsonP, json);
			}

			this.ongoingRequest = aria.core.IO.jsonp({
				url : this.data.url,
				timeout : 2000,
				callback : {
					fn : this.onSuccess,
					scope : this,
					onerror : this.onError,
					onerrorScope : this
				}
			});
		},

		onSuccess : function (responeObject, callbackArguments) {
			this.$json.setValue(this.data, "response", "<strong>Successfull response</strong><br/>Request: "
					+ responeObject.url + "<br/>Message: "
					+ aria.utils.Json.convertToJsonString(responeObject.responseJSON));
		},

		onError : function (responeObject, callbackArguments) {
			this.$json.setValue(this.data, "response", "<strong>Response error</strong><br/>Request: "
					+ responeObject.url + "<br/>Message: " + responeObject.error);
		}
	}
});