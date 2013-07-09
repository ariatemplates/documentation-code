/**
 * Copyright Amadeus
 */
{Template {
	$classpath : "samples.widgets.widgetlibs.html.template.SimpleSubTemplate",
	$hasScript : true,
	$css : ['samples.widgets.widgetlibs.html.template.SimpleSubTemplateCss'],
	$wlibs: {
		"html" : "aria.html.HtmlLibrary"
	}
}}

{macro main ()}
	<p id="subTemplateItem" class="elemContent">
		Sub template content loaded successfully and applied the css.
	</p>

	<h3>Data loaded from module controller </h3>
	<p id="moduleCtrlData">${data.inheritedData}</p>
	<p style="border-bottom:1px solid #ddd;">&nbsp;</p>
	<h3>Databinding in sub-template</h3>

	{@aria:TextField {
	  id : "t2",
	  label:"TextField 2",
	  bind: {
		"value": {
			inside:data, to:'label'
		}
	  }
	} /}

	{@aria:TextField {
	  id : "t3",
	  label:"TextField 3",
	  bind: {
		"value": {
			inside:data, to:'label'
		}
	  }
	} /}



	<p style="border-bottom:1px solid #ddd;">&nbsp;</p>

	{@html:Template {
		id: "viewMainTpl",
		type:"span",
		classpath: "samples.widgets.widgetLibs.html.template.SimpleChildSubTemplate",
		data:data['childTemplateData'],
		attributes:{
			classList:["c1","c2"],
			alt:"This acts like a title"
		}
	}/}


{/macro}

{/Template}