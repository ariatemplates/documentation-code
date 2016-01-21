Aria.tplScriptDefinition({
	$classpath:'samples.widgets.radiobutton.binding.RadioButtonBindingScript',
	$prototype:{
		$dataReady: function() {
			this.data.logs = [];
		},

		onRadioChange: function(evt,arg) {
			this.log("Radio button group "+ arg.radioGroup + " selected and the keyValue is "+ arg.keyValue);
		},

		log: function(message) {
			aria.utils.Json.add(this.data.logs, message);
		}
	}
});
