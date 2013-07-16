Aria.tplScriptDefinition({
	$classpath : "samples.widgets.widgetlibs.html.textinput.BaseTextInputTagScript",
	$prototype : {
		$dataReady : function () {
			this.data = {
				value: ''
			};
		},
		reactOnType : function () {
			var value = this.data.counter;
			if (!value) {
				value = 0;
			}

			value += 1;

			this.$json.setValue(this.data, "counter", value);
		}
	}
});