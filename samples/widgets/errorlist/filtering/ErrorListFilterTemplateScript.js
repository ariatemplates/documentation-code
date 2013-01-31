Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.errorlist.filtering.ErrorListFilterTemplateScript',
	$prototype : {
		$dataReady : function (){
			var localisedMsg = {
		            "filterError" : "Error message filtered in",
		            "filterInfo" : "Info message filtered in",
		            "filterWarn" : "Warning message filtered in",
		            "filterSuccess" : "Success message filtered in"};
			this.data.messages = !this.data.messages ? [ {
				type : "O",
				localizedMessage : localisedMsg.filterSuccess
			}, {
				type : "I",
				localizedMessage : localisedMsg.filterInfo
			}, {
				type : "E",
				localizedMessage : localisedMsg.filterError
			}, {
				type : "W",
				localizedMessage : localisedMsg.filterWarn
			} ] : this.data.messages;
		}
	}
});