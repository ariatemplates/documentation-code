Aria.tplScriptDefinition({
	$classpath:'samples.widgets.radiobutton.binding.RadioButtonBindingScript',
	$prototype:{
		onRadioChange: function(evt,arg) {
			alert("Radio button group "+ arg.radioGroup + " selected and the keyValue is "+ arg.keyValue);
		}
	}
});