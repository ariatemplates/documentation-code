{Template {
	$classpath:'samples.templates.domInteractions.focushandling.BTemplate'
}}

	{macro main()}
		<b>subtemplate B</b>
		<ul>
			<li>
			{@aria:TextField {
				width:200,
				bind : {
                    value : {
                      to : "text",
                      inside : data
                    }
                }
			}/}
			</li>
			<li>
			{@aria:TextField {
				width:200,
                bind : {
                    value : {
                      to : "text",
                      inside : data
                    }
                }
			}/}
			</li>
		</ul>
	{/macro}

{/Template}