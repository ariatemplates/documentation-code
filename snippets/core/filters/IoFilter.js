Aria.classDefinition({
	$classpath: 'snippets.core.filters.IoFilter',
	$extends: 'aria.core.IOFilter',
	$constructor: function() {
		this.$IOFilter.constructor.call(this, args);
	},
	$prototype: {
		/**
		 * Method called before a request is sent to get a chance to change its arguments
		 * @param {aria.core.CfgBeans.IOAsyncRequestCfg} request
		 */
		onRequest: function(request) {
		
		},
		
		/**
		 * Method called when a response is received to change the result values before 
		 * the callback is called
		 * @param {aria.core.CfgBeans.IOAsyncRequestCfg} request
		 */
		onResponse: function(response) {
		
		}
	}
});