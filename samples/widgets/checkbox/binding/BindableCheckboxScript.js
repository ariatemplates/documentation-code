Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.checkbox.binding.BindableCheckboxScript',
	$prototype : {
		initVariables : function () {
			this.data.isCheckMe = true;
			this.data.enableAll = false;
		},
		onchange: function() {
			this.$json.setValue(this.data, "enableAll", (this.data.enableAll) ? false : true);
		}
	}
});