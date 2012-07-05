{Template {
    $classpath: 'samples.widgets.bindings.Default',
    $hasScript : true
}}
    {macro main()}
        {@aria:TextField {
            label: 'Your name:',
            bind: {
                value: { inside: data, to: "name" }
            }
        }/}

        <br /><br />

        {@aria:Button {
            label: "Shout it!",
			onclick : {
				fn : shoutClick
			}
        }/}
    {/macro}
{/Template}
