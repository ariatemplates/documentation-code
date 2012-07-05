Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.dialog.action.DialogActionSampleScript',
	$prototype : {
		dialogOpen : function() {
			alert("fired on dialog open...");
		},
		closeClick : function() {
			alert("This is a sample of a callback function associated to the close");
			this.$json.setValue(this.data, "dialogOpen", false);
		},
		clickHandler : function() {
			this.$json.setValue(this.data, "dialogOpen", true);
		}
	}
});