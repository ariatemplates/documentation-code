
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.views.filtering.FilterTemplateScript',
	$prototype : {
		/**
		 * Initializes the variables in the data model
		 */
		initVariables : function () {
			if (typeof(this.data.filterGroup) == 'undefined')
			{
				this.data.filterGroup = 'all';
			}
		},
		/**
		 * Event handler when radio button choice changes
		 * @param {} evt Parameter not used
		 * @param {} args Arguments specified in the template
		 */
		onRadioChange : function (evt, args) {
			if (this.data.filterGroup == 'all') {
				this.aview.allFilteredIn();
			} else if (this.data.filterGroup == 'none') {
				this.aview.allFilteredOut();
			} else if (this.data.filterGroup == 'paris') {
				this.aview.filterIn(this.aview.FILTER_SET, function (o) {
					return (o.value.name.match(/paris/i) != null);
				});
			} else if (this.data.filterGroup == 'cheap') {
				this.aview.filterIn(this.aview.FILTER_SET, function (o) {
					return (o.value.price.value <= 100);
				});
			}
			this.$refresh();
		}
	}
});