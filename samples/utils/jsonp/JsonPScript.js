Aria.tplScriptDefinition({
    $classpath : "samples.utils.jsonp.JsonPScript",
    $prototype : {
        doRequest : function () {
            aria.core.IO.jsonp({
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
                    + responeObject.url + "<br/>Message: " + this.$json.convertToJsonString(responeObject.responseJSON));
        },

        onError : function (responeObject, callbackArguments) {
            this.$json.setValue(this.data, "response", "<strong>Response error</strong><br/>Request: "
                    + responeObject.url + "<br/>Message: " + responeObject.error);
        }
    }
});
