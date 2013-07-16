/**
 * Copyright Amadeus
 */
{Template {
	$classpath : "samples.widgets.widgetlibs.html.template.SimpleChildSubTemplate",
	$css : ['samples.widgets.widgetlibs.html.template.SimpleSubTemplateCss']
}}

{macro main ()}
	  <h3> Referenced path data </h3>
	  <p id="childSubTemplate">${data.specificData}</p>

{/macro}

{/Template}