{Template {
	$classpath : "samples.widgets.widgetlibs.html.autocomplete.widget.InputWidget",
	$hasScript : true,
	$css : ["samples.widgets.widgetlibs.html.autocomplete.common.Style"],
	$wlibs : {
		html : "aria.html.HtmlLibrary"
	},
	$macrolibs : {
		suggestions : "samples.widgets.widgetlibs.html.autocomplete.common.SuggestionsLibrary"
	}
}}

{macro main ()}

{@html:TextInput {
	bind : {
		value : {
			inside : data,
			to : "value"
		}
	},
	on : {
		type : {
			fn : "suggestValue",
			scope : this.suggestionsController
		}
	},
	attributes : {
		placeholder : "Type a country name:"
	}
}/}
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