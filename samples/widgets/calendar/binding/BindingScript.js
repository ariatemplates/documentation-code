Aria.tplScriptDefinition({
	$classpath : "samples.widgets.calendar.binding.BindingScript",
	$dependencies : ["aria.utils.Json", "aria.utils.Date"],
	$prototype : {
		dateSelected : function () {
			var formatDate = aria.utils.Date.format(this.data.value, "d MMM y", true);
			this.$json.setValue(this.data, "fieldDate", formatDate);
		}
	}
});
