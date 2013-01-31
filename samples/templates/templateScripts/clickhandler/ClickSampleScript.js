Aria.tplScriptDefinition({
	$classpath : 'samples.templates.templateScripts.clickhandler.ClickSampleScript',
	$prototype : {

		clickHandler : function () {
			var time = new Date();
			alert("It is " + time.toTimeString());
		}

	}
});