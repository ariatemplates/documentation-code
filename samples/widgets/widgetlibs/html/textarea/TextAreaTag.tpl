{Template {
	$classpath : "samples.widgets.widgetlibs.html.textarea.TextAreaTag",
	$hasScript : true,
	$css : ["samples.widgets.widgetlibs.html.textarea.Style"],
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

{@html:TextArea {
	attributes : {
		classList : ["stylish"]
	},
	//text to be displayed before the user issues input
	placeholder : "I'm here to help",
	//define that complete content should be selected when focussing
	autoselect : true,
	bind : {
		value : {
			inside : data,
			to : "value",
			//add transformation function
			transform : {
				fromWidget : function(value) {
					//convert new lines form the widget to html line break
					return value.split(/\r\n|\r|\n/).join("<br />");
				}
			}
		}
	},
	//event listener
	on : {
		type : "reactOnType"
	}
}/}
{/macro}

{macro counter()}
<p class="count">You typed <strong>${data.counter |empty:0}</strong> characters. Please type more!</p>
<p class="selected">Widget value is (It's updated when you leave the field): </p>
<p>'<strong>${data.value|escapeForHTML:false}</strong>'</p>
{/macro}

{/Template}