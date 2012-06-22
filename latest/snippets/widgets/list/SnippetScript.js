Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.widgets.list.SnippetScript",
	$constructor : function () {
		this.data.items = [ {
				value : 0,
				label : 'OptionB'
			}, {
				value : 1,
				label : 'OptionC'
			}, {
				value : 2,
				label : 'OptionA'
			}, {
				value : 3,
				label : 'OptionE'
			}, {
				value : 4,
				label : 'OptionD'
			} ]
	},
	$prototype : {
		openDialog : function (evt) {
			// no need to do anything
		},
		closeDialog : function (evt) {
			// no need to do anything
		}
	}
});