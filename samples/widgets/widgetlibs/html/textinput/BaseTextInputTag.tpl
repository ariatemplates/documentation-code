{Template {
	$classpath : "samples.widgets.widgetlibs.html.textinput.BaseTextInputTag",
	$hasScript : true,
	$css : ["samples.widgets.widgetlibs.html.textinput.Style"],
	$wlibs : {
		html : "aria.html.HtmlLibrary"
	}
}}

{macro main ()}
{section {
	id : "displayCount",
	macro : "counter",
	bindRefreshTo : [
		{
			inside : data,
			to : "counter"
		},
		{
			inside : data,
			to : "value"
		}
	]
}/}

<br />

{@html:TextInput {
	attributes : {
		classList : ["stylish"]
	},
	placeholder : "I'm here to help",
	autoselect : true,
	bind : {
		value : {
			inside : data,
			to : "value"
		}
	},
	on : {
		type : "reactOnType"
	}
}/}
{/macro}

{macro counter()}
<p class="count">You typed <strong>${data.counter |empty:0}</strong> characters. Please type more!</p>
<p class="selected">Widget value is '<strong>${data.value}</strong>'. It's updated when you leave the field.</p>
{/macro}

{/Template}