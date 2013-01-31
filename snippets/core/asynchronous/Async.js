Aria.classDefinition({
	$classpath: 'snippets.core.asynchronous.Async',
	$constructor: function() {
		this.path = this.$package.replace(/\./ig, "/");

		////#notWorking
		var myTxt = this.fetchResourceFromServer("empty.txt");
		////#notWorking

		////#sampleCallbackObject
		var myCallbackObject = {
			fn: "myMethodName",
			scope: this,
			args: {
				//Some arguments to give to myMethod when called
			},
			resIndex:0,
			apply:true
		};
		////#sampleCallbackObject

	},
	$prototype: {

		////#playingAsynchronous
		playingAsynchronous: function() {
			this.$logDebug("Hi there!");
			this.fetchResourceFromServer("empty.txt", {
				fn: function(response, args) {
					this.$logDebug("Is there anybody in here?");
				},
				scope: this
			});
			this.$logDebug("Yes, I'm here! there's me.");
		},
		////#playingAsynchronous


		simpleSyncMethod: function() {
			var myObjectReference = {};
			//do some stuff
			////#sampleSyncReturn
			// Synchronous return statement
			return myObjectReference;
			////#sampleSyncReturn
		},

		simpleAsyncMethod: function() {
			////#sampleAsyncReturn
			var myCallback = {
				fn: "myMethodName",
				scope: this
			};

			// Asynchronous Aria Templates 'return' statement
			this.$callback(myCallback);
			////#sampleAsyncReturn
		},

		////#propagatingCallback
		/**
		 * This method retrieves a resource file on the server
		 * @param {String} the resource name
		 * @param {Object} an asynchronous callback
		 */
		fetchResourceFromServer: function(resource, callback) {
			var myResource = [this.path, resource].join("/");
			aria.core.IO.asyncRequest({
				url: myResource,
				method: "get",
				callback: {
					fn: "__resourceFetched",
					scope: this,
					args: {
						callback: callback //We propagate our callback argument
					}
				}
			});
		},

		/**
		 * @private
		 * Internal callback when a resource has been fetched with fetchResourceFromServer
		 * @param {Object} the response object wrapping the xhr response object
		 * @param {Object} Arguments provided through the original callback object
		 */
		__resourceFetched: function(response, args) {
			// We retrieve our callback object from the args object
			var callback = args.callback;
			// Do some stuff with the response content

			// We are done, finally calling back the caller!
			this.$callback(callback);
		}
		////#propagatingCallback
		
		////#sampleAsyncRequest
		aria.core.IO.asyncRequest({
				url: myResource,
				method: "get",
				callback: {
					fn: "__resourceFetched",
					scope: this,
					args: {
						callback: callback //We propagate our callback argument
					}
				}
			});
		////#sampleAsyncRequest

	}
});