/**
 * TODOC
 * @class samples.features.refresh.TemplateRefreshScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.features.refresh.TemplateRefreshScript',
	$prototype : {

		initCountIfNeeded : function () {
			var data = this.data;
			if (!data["view:count"]) {
				// count doesn't exist - cf. tutorial on variables and meta-data
				this.$json.setValue(data, "view:count", "1");
			}
			data = null;
		},

		/**
		 * Update the count meta-data used to get different values each time a refresh is made
		 */
		updateCount : function () {
			var data = this.data;
			if (isNaN(data["view:count"])) {
				this.$json.setValue(data, "view:count", data["view:count"] + 1);
			} else {
				this.$json.setValue(data, "view:count", String(parseInt(data["view:count"], 10) + 1));
			}
			data = null;
		},

		updateCountAndRefresh : function (evt, args) {

			this.updateCount();

			this.$refresh(args);
		},

		onclickrefresh : function () {
			var data = this.data;
			var showValue;

			if (data.sectionRefresh === undefined) {
				showValue = 1;
			} else {
				showValue = data["sectionRefresh"] + 1
			}
			this.$json.setValue(data, "sectionRefresh", showValue);

		}

	}
});