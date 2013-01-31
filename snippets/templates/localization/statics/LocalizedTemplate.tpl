{Template {
	$classpath : "snippets.templates.localization.statics.LocalizedTemplate",
	$hasScript : true,
	$res : {
		res : "snippets.templates.localization.statics.LocalResources"
	}
}}
	{var label = res.hello.label /}

	{macro main ( )}
		<h1> ${label.welcome} </h1>
		<href="${res.hello.link.ariaTemplatesDoc}"> ${label.ariaTemplatesDoc} </a>

		{@aria:Button {
			label : res.common.label.ok,
			onclick : "clickOK"
		}/}

	{/macro}

{/Template}
