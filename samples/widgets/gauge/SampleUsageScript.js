Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.gauge.SampleUsageScript',
	$prototype : {

		startGauge : function (arg) {
			var currValue = parseInt(this.data.currentValue);
			if (currValue === this.data.maxValue) {
				this.resetGauge();
			}
			this.$json.setValue(this.data, "label", "Searching...");
			this.increaseGauge(this.data.maxValue);
		},
		increaseGauge : function (arg) {
			if (this.data == null) {
				// e.g. the widget has been disposed
				return;
			}
			var currValue = parseInt(this.data.currentValue);
			if (currValue < arg) {
				this.$json.setValue(this.data, "currentValue", currValue + 1);

				aria.core.Timer.addCallback({
					fn : this.increaseGauge,
					scope : this,
					delay : 40,
					args : arg
				});
			} else {
				this.$json.setValue(this.data, "label", "Done");
			}
		},
		resetGauge : function () {
			this.$json.setValue(this.data, "currentValue", -100);
			this.$json.setValue(this.data, "label", "");
		}
	}
});
