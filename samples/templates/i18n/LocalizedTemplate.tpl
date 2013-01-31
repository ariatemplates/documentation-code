{Template {
	$classpath: "samples.templates.i18n.LocalizedTemplate",
	$hasScript: true,
	$res: {
		res : "samples.templates.i18n.res.SampleRes"
	}
}}


	{macro main()}

		<h4>Aria templates: <span class="title">localized</span></h4>

		{@aria:SelectBox {
			label: "Choose locale: ",
			labelWidth:220,
			helptext:"Type text or select",
			options: data.locales,
			bind: {
				value: {
					to: 'selectedLocale',
					inside: data
				}
			},
			onchange:{
				fn: selectBoxChanged
			}
		}/}<br/><br/><br/>

		${res.messages.label.welcome} <br/><br/>

		{@aria:Button {
			id: "btnOK",
			label: res.buttons.label.ok,
			onclick: {
				fn: buttonClicked,
				args: res.messages.label.clickOK
			}
		}/}
		{@aria:Button {
			id: "btnAvail",
			label: res.buttons.label.avail,
			onclick: {
				fn: buttonClicked,
				args: res.messages.label.clickAvail
			}
		}/}
	{/macro}

{/Template}
