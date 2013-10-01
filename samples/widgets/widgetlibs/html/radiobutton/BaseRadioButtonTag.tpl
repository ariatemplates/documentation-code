{Template {
	$classpath : "samples.widgets.widgetlibs.html.radiobutton.BaseRadioButtonTag",
	$hasScript : true,
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
			to : "selectedValue"
		}
	]
}/}

<br />

{@html:RadioButton {
    value : "a",
	bind : {
		selectedValue : {
			inside : data,
			to : "selectedValue"
		}
	},
	on : {
		click : reactOnSelect
	}
}/}
label 1 associated to value 'a'<br>

{@html:RadioButton {
    value : "b",
	bind : {
		selectedValue : {
			inside : data,
			to : "selectedValue"
		}
	},
	on : {
		click : "reactOnSelect"
	}
}/}
label 2 associated to value 'b'<br>

{@html:RadioButton {
    value : "c",
	bind : {
		selectedValue : {
			inside : data,
			to : "selectedValue"
		}
	},
	on : {
		click : reactOnSelect
	}
}/}
label 2 associated to value 'c'<br>

{/macro}

{macro counter()}
<p class="count">You changed your selection <strong>${data.counter |empty:0}</strong> times.</p>
<p class="selected">Widget value is '<strong>${data.selectedValue}</strong>'.</p>
{/macro}

{/Template}
