{Template {
	$classpath:'samples.templates.domInteractions.focushandling.ATemplate',
	$hasScript:true
}}

	{macro main()}
		<b>subtemplate A</b>
		<ul>
			<li>
			{@aria:CheckBox {
				id:"checkbox1",
				label:"1",
				labelPos: "right",
                bind : {
                    value : {
                      to : "check1",
                      inside : data
                    }
                }
			} /}
			</li>
			<li>
			{@aria:CheckBox {
				id:"checkbox2",
				label:"2",
				labelPos: "right",
                bind : {
                    value : {
                      to : "check2",
                      inside : data
                    }
                }
			} /}
			</li>
			<li>
			{@aria:CheckBox {
				id:"checkbox3",
				label:"3",
				labelPos: "right",
                bind : {
                    value : {
                      to : "check3",
                      inside : data
                    }
                }
			} /}
			</li>
		</ul>
	{/macro}

{/Template}