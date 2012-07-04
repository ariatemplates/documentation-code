{Template {
  $classpath : 'samples.widgets.template.TemplateSample',
  $hasScript : false } }

	{macro main ( )}
        <h4>This template contains two subtemplate.</h4>
        <ul>
            <li>
                <div style="color:green"><strong>First subtemplate:</strong></div>
                {@aria:Template {
                        defaultTemplate: 'samples.widgets.template.FirstSubTemplate'
                } /}
            </li>
            <li>
                <div style="color:green"><strong>Second subtemplate receiving data from the parent:</strong></div>
                {@aria:Template {
                        defaultTemplate: "samples.widgets.template.SecondSubTemplate",
                        data: {myMessage : "This is just a message from the parent template."}
                } /}
            </li>
        </ul>
	{/macro}

{/Template}
