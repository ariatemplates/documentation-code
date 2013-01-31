Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.checkbox.SimpleCheckboxScript',
	$prototype : {
		onchange: function(e,arg) {
			alert("Argument passed is :" + arg);
		}

	}
});