{Template {
	$classpath : "samples.widgets.widgetlibs.html.select.BaseSelectTag",
	$hasScript : true,
	$css : ["samples.widgets.widgetlibs.html.select.Style"],
	$wlibs : {
		html : "aria.html.HtmlLibrary"
	}
}}

{macro main ()}

 {var myOptions = [{value : "EURO",
                    label : "France"
                   }, {
                    value : "FRANC SUISSE",
                    label : "Switzerland"
                   }, {
                    value : "POUND",
                    label : "United Kingdom"
                   }]/}
                   
 {var myFancyOptions = [{value : "EURO",
                    label : "France"
                   }, {
                    value : "FRANC SUISSE",
                    label : "Switzerland",
                    attributes:{
                    	disabled : "disabled"
                    }
                   }, {
                    value : "POUND",
                    label : "United Kingdom"
                   }]/}   
                                   
 {var myStringOptions = ["EURO","FRANC SUISSE","POUND"]/}
 
<p>                

We have 2 main types of select :
<br>
<br>
<h2>using the options property</h2>
<br>

<h3>binding the value</h3>
<br>
{@html:Select {
	attributes : {
		classList : ["stylish"]
	},
	options : myOptions,
	bind : {
		value : {
			inside : data,
			to : "selectedCurrency"
		}
	}
}/}
<br>
<br>

<h3>using an array of strings to create the select</h3>
<br>
Each string from you array will be used to fill 'label' and 'value' in the options tag
{@html:Select {
	attributes : {
		classList : ["stylish"]
	},
	options : myStringOptions,
	bind : {
		value : {
			inside : data,
			to : "selectedCurrency"
		}
	}
}/}
<br>


your options can have 3 different properties: a value, a label, and a set of attributes(here we disable the second item)
<br>
{@html:Select {
	attributes : {
		classList : ["stylish"]
	},
	options : myFancyOptions,
	bind : {
		value : {
			inside : data,
			to : "selectedCurrency"
		}
	}
}/}
<br>
<br>
<h3>binding the index</h3>
<br>

{@html:Select {
	attributes : {
		classList : ["stylish"]
	},
	options : myOptions,
	bind : {
		selectedIndex : {
			inside : data,
			to : "selectedIndex"
		}
	}
}/}
<br>
<div  style="background-color: yellow">
this section is bound to the selected index
<br>
{section {
	id : "displayCountindex",
	macro : "BoundIndex",
	bindRefreshTo : [
		{
			inside : data,
			to : "selectedIndex"
		}
	]
}/}
</div
<br>
<br>

//same select implemented with a free html content
<h2>using an html body content</h2>
<br>
{@html:Select {
	attributes : {
		classList : ["stylish"]
	},
	bind : {
		value : {
			inside : data,
			to : "selectedCurrency"
		}
	}
}}
    {foreach option in myOptions}
        <option value="${option.value}">${option.label}</option>
    {/foreach}

{/@html:Select}
<br>
<br>
<div style="background-color: yellow">
this section is bound to the selected value
<br>
{section {
	id : "displayCount",
	macro : "BoundValue",
	bindRefreshTo : [
		{
			inside : data,
			to : "selectedCurrency"
		}
	]
}/}
</div>
</p>

{/macro}

{macro BoundValue()}

Selected currency : <strong>${data.selectedCurrency}</strong> .

{/macro}

{macro BoundIndex()}

Selected index : <strong>${data.selectedIndex}</strong>.

{/macro}

{/Template}
