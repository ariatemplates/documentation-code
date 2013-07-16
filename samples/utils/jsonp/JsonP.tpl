{Template {
	$classpath : "samples.utils.jsonp.JsonP",
	$hasScript : true
}}

{macro main()}
	{@aria:TextField {
		label : "Url for JSON-P request",
		labelWidth : 160,
		width : 500,
		bind : {
			value : {
				inside : data,
				to : "url"
			}
		}
	}/}
	<br/>
	{@aria:Button {
		label : "Send Request",
		onclick : doRequest
	}/}

	<br />
	<br />
	{section {
		id : "responseContent",
		macro : "content",
		bindRefreshTo : [{
			inside : data,
			to : "response"
		}]
	}/}
{/macro}

{macro content()}

{if (data.response)}
	<fieldset>
		${data.response}
	</fieldset>
{/if}

{/macro}

{/Template}