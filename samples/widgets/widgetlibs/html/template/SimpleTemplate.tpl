/**
 * Copyright Amadeus
 */
{Template {
	$classpath : "samples.widgets.widgetlibs.html.template.SimpleTemplate",
	$wlibs: {
		"html" : "aria.html.HtmlLibrary"
	}
}}

{macro main ()}
	<h3>Widget in sub template</h3>
	{@aria:TextField {id : "t1" } /}
	<br/>
	<br/>
	{@html:Template {
		id: "viewMainTpl",
		type:"span",
		classpath: "samples.widgets.widgetlibs.html.template.SimpleSubTemplate",
		attributes:{
			classList:["c1","c2"],
			alt:"This acts like a title"
		}
	}/}


{/macro}

{/Template}