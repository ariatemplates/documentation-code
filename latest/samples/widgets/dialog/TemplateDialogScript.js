Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.dialog.TemplateDialogScript',
	$prototype : {
		clickHandler : function() {
			this.$json.setValue(this.data, "dialogOpen", true);
		}
	}
});