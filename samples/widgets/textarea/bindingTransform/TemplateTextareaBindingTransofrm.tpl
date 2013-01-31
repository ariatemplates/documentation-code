{Template {
  $classpath : 'samples.widgets.textarea.bindingTransform.TemplateTextareaBindingTransofrm'
	} }
  
  {var test = { value : "text value" }/}
  
  {macro main ( )}
  
	 {@aria:Textarea {
			label : "Simple Transform",
			labelPos : "left",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
			  "value" : {
				inside : test,
				to : 'value',
				transform : function (value) {
                            // Reverse the string
                            return value.split("").reverse().join("");
                        }}
				},
			height : 50 
		}/}
		
  {/macro}

{/Template}
