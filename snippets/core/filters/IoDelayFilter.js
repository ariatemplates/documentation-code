Aria.classDefinition({
	$classpath: 'snippets.core.filters.IoDelayFilter',
	$extends: 'aria.core.IOFilter',

	////#delayFilterConstructor
	$constructor: function() {
		this.$IOFilter.constructor.call(this, args);
		this.requestDelay = 5000;
		this.responseDelay = 6000;
	},
	////#delayFilterConstructor

	$prototype: {
		/**
		 * Method called before a request is sent to get a chance to change its arguments
		 * @param {aria.core.CfgBeans.IOAsyncRequestCfg} request
		 */
		// //#delayFilter
		onRequest: function(request) {
			// Some code
			request.delay = this.requestDelay;
			// Some code
		},

		// //#delayFilter

		/**
		 * Method called when a response is received to change the result values before
		 * the callback is called
		 * @param {aria.core.CfgBeans.IOAsyncRequestCfg} request
		 */
		////#delayFilter
		onResponse: function(response) {
			// Some code
			response.delay = this.responseDelay;
			// Some code
		}

		////#delayFilter
	}
});