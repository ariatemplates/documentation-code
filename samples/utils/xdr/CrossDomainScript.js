Aria.tplScriptDefinition({
    $classpath : 'samples.utils.xdr.CrossDomainScript',
    $dependencies : ['aria.utils.json.JsonSerializer'],
    $prototype : {
        xdrRequest : function () {
            var oSelf = this;
            // Event handler for the success event
            this.handleSuccess = function (o) {
                try {
                    alert('Transaction successful');
                    oSelf.response = oSelf.formatResponse(o.responseText);
                    this.$json.setValue(this.data, "response", true);
                } catch (ex) {}
            };

            // Event handler for the failure event
            this.handleFailure = function () {
                try {
                    alert('Transaction failure');
                } catch (ex) {}
            };

            // Set up the callback object used for the transaction.
            this.callback = {
                fn : this.handleSuccess,
                scope : this,
                onerror : this.handleFailure,
                onerrorScope : this
            };

            // Make request
            aria.core.IO.asyncRequest({
                method : 'GET',
                url : "http://pipes.yahooapis.com/pipes/pipe.run?_id=giWz8Vc33BG6rQEQo_NLYQ&_render=json",
                callback : this.callback
            });
        },
        formatResponse : function (response) {
            if (response) {
                var serializer = new aria.utils.json.JsonSerializer();
                return serializer.serialize(this.$json.load(response), {
                    indent : "\t"
                });
            }
        }
    }
});
