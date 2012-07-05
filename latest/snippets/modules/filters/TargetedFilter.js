Aria.classDefinition({
	$classpath:'snippets.modules.filters.TargetedFilter',
	$extends:'aria.core.IOFilter',
	$constructor:function(args) {
		this.$IOFilter.constructor.call(this, args);
	},
	$prototype:{
		onRequest:function(request) {
			var sender = request.sender;
			if (sender && sender.classpath == "aria.modules.RequestMgr"
				&& sender.requestObject.moduleName == 'snippets.modules.filters.MyController') {
				// ... Do your filtering here
			}		
		}	
	}
});