Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.errorlist.custom.CustomizedErrorListTemplateScript',
	$prototype : {
		$dataReady : function (){
			this.data = {
				messages : [{
					"localizedMessage" : "Error message1"
				},
				{
					"localizedMessage" : "Error message2"
				},
				{
					"localizedMessage" : "Error message3"
				},
				{
					"localizedMessage" : "Error message4"
				}]
			};
		}
	}
});