{Template {
	$classpath : "ariadoc.snippets.templates.localization.statics.LocalizedTemplate",
	$hasScript : true,
	$res : {
		res : "samples.templates.localization.Res" 
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
