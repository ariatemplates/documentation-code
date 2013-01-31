{Template {
  $classpath : 'samples.widgets.textarea.prefill.TemplateTextareaPrefill'
	} }
  
  {var test = { value : "text value" }/}
  
  {macro main ( )}
	
	
	{@aria:Textarea {
			label : "Standard Prefill",
			labelPos : "left",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
			  prefill : {
				to : "value",
				inside : test }
				},
			height : 50 
	}/}
  {/macro}

{/Template}
