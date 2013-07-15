{Template {
	$classpath: "samples.templates.cdata.CDATATemplate",
	$hasScript: false
}}
	{macro main()}
		<h2>Code sample display using CDATA</h2>
		
		<textarea readonly="readonly" style="width:46em;height:500px;border:dashed 1px #F1E8D9;background:none;">
			{CDATA}		
	// Sample template for control flow tutorial
	
	{Template {
		classpath:'tutorials.controlflow.step3.ControlFlowStep3'
	}}
		{macro main()}
			<h1>If example: </h1>
			
			{if data.name == 'John'}
				<p>The name is John</p>
			{else/}
				<p>The name is not John</p>			
			{/if}
	
			{if data.age < 13}
				<p>Child</p>
			{elseif data.age < 20 /}
				<p>Teenager</p>		
			{else/}
				<p>Adult</p>		
			{/if}		
			
		{/macro} 
		
	{/Template}   			
			{/CDATA}
		</textarea>
		
	{/macro}
{/Template}