{Template {
	$classpath : "samples.utils.storage.Persist",
	$hasScript : true
}}

{macro main()}

{call warning()/}

{@aria:TextField {
	bind : {
		value : {
			inside : data,
			to : "value"
		}
	}
}/}

<br />

{@aria:Button {
	label : "Save",
	onclick : "save",
	margins : "15 20 x x"
}/}

{@aria:Button {
	label : "Load",
	onclick : "load",
	margins : "15 20 x x"
}/}

{@aria:Button {
	label : "Clear",
	onclick : "clear",
	margins : "15 20 x x"
}/}
{/macro}

{macro warning()}
{section {
	id : "message",
	macro : "errorMessage",
	bindRefreshTo : [{
		inside : data,
		to : "error"
	}, {
		inside : data,
		to : "external"
	}]
}/}
{/macro}

{macro errorMessage()}
{if data.error}
<div>
	<strong>Your browser doesn't support localStorage.</strong> ${data.error}
</div>
{elseif data.external /}
<div>
	<strong>The value was changed in another browser's tab.</strong>
	<br />
	The new value is <strong>${data.external.value}</strong>
	<br /><br />
</div>
{/if}
{/macro}
{/Template}