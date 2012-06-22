{Template {
	$classpath : "ariadoc.snippets.templates.i18n.statics.LocalizedTemplate",
	$hasScript : true,
	$res : {
		res : "ariadoc.snippets.templates.i18n.statics.Res" 
	}
}}
	{var label = res.hello.label /}

	{macro main ( )}
		<h1> ${ label.welcome } </h1>
		<href="${res.hello.link.ariaTemplatesDoc}"> ${ label.ariaTemplatesDoc } </a>

		{@aria:Button {
			label : res.common.label.ok,
			onclick : "clickOK"
		}/}

	{/macro}

{/Template}
