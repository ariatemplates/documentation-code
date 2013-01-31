Aria.classDefinition({
	$classpath:'snippets.modules.filters.OfflineFilter',
	$extends:'aria.core.IOFilter',
	$constructor:function(args) {
		this.$IOFilter.constructor.call(this, args);
	},
	$prototype:{
		onRequest:function(request) {
			var sender = request.sender;
			if (!sender || sender.classpath != "aria.modules.RequestMgr") {
				return;
			}
			var responseFile = '';
			var requestObject = sender.requestObject;
			if (requestObject.moduleName == "snippets.modules.filters.MyController" && requestObject.actionName == "doStuff") {
				var requestData = sender.requestData;
				
				if (requestData == null) {
					responseFile = '/mocks/response-dostuff-nodata.xml';
				} else {					
					var param = requestData.param;
					if (param == "option_1" || param == "option_2") {
						responseFile = '/mocks/response-dostuff-option.xml';
					} 
					else {
						// let's send back default response
						responseFile = '/mocks/response-dostuff-default.xml';
					}
				}
			}
			if (responseFile) {			
				this.redirectToFile(request, this.$package.replace(/\./ig, "/") + responseFile);						
			}	
		}	
	}
});