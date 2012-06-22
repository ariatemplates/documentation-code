Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.widgets.autocomplete.SnippetScript",
	$dependencies : ["ariadoc.snippets.widgets.autocomplete.Handler"],
	$prototype : {
		getHandler : function () {
			return "ariadoc.snippets.widgets.autocomplete.Handler";
		}
	}
});