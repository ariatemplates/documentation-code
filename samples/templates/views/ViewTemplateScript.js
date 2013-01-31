/**
 * @class samples.templates.views.ViewTemplateScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.views.ViewTemplateScript',
	$prototype : {
		/**
		 * Initializes the variables in the data model
		 */
		initVariables : function () {
			if (typeof(this.data.filterGroup) == 'undefined')
			{
				this.data.filterGroup = 'all';
			}
			this.aview.setPageSize(3);
		},

		/**
		 * Callback function to get the sort key for every element.
		 * @param {} o Data about the element to sort. Includes the actual element in o.value, but also meta data in other properties of o.
		 * @return {} The sort key to be used for the element
		 */
		sortByName : function (o) {
			return o.value.name;
		},

		/**
		 * Event handler used to toggle the sort order and refresh the template
		 */
		toggleSort : function () {
			this.aview.toggleSortOrder('SortByName', this.sortByName);
			this.$refresh();
			return false;
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
		},

		/**
		 * Event handler from template to change displayed page.
		 *
		 * @param {} ec Parameter not used
		 * @param {} pageIdx The 0-based page index to display
		 */
		showPage : function (ec, pageIdx) {
			var aview = this.aview;
			aview.currentPageIndex = pageIdx;
			this.$refresh();
			return false; // to prevent the anchor to generate a page navigation
		}
	}
});