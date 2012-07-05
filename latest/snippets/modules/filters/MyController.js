Aria.classDefinition({
	$classpath: 'snippets.modules.filters.MyController',
	$extends: 'aria.templates.ModuleCtrl',
	$constructor: function() {
		this.$ModuleCtrl.constructor.call(this, arguments);
		aria.core.IOFiltersMgr.addFilter('snippets.modules.filters.OfflineFilter');
	},
	$desctructor: function() {
		aria.core.IOFiltersMgr.removeFilter('snippets.modules.filters.OfflineFilter');
	},
	$prototype: {
		doSomeAsyncStuff: function(option, callback) {
			var data2send;
			if (option) {
				data2send = {
					param: option
				};
			}
			this.submitJsonRequest('doStuff', data2send, {
				fn: "__onDoSomeAsyncStuff",
				scope: this,
				args: {
					callback: callback
				}
			});
		},

		__onDoSomeAsyncStuff: function(result, args) {
			//Get here your mocked datas.
		}
	}
});