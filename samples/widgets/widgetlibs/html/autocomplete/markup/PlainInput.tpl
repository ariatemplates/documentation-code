{Template {
	$classpath : "samples.widgets.widgetlibs.html.autocomplete.markup.PlainInput",
	$hasScript : true,
	$css : ["samples.widgets.widgetlibs.html.autocomplete.common.Style"],
	$macrolibs : {
		suggestions : "samples.widgets.widgetlibs.html.autocomplete.common.SuggestionsLibrary"
	}
}}

{macro main ()}

<input
	type="text"
	placeholder="Type a country name:"
	{id "inputField" /}
	{on keyup type /}
	>
<br />


{section {
	id : "results",
	macro : {
		name : "displayResults",
		args : [suggestionsController.data, this],
		scope : suggestions
	},
	bindRefreshTo : [
		{inside : suggestionsController.data, to : "suggestions"}
	]
}/}

{section {
	id : "selection",
	macro : {
		name : "displaySelected",
		args : [suggestionsController.data, this],
		scope : suggestions
	},
	bindRefreshTo : [
		{inside : suggestionsController.data, to : "value"}
	]
}/}

{/macro}

{/Template}