/**
 * @class samples.templates.views.sorting.SortingTemplateScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.views.sorting.SortingTemplateScript',
	$prototype : {
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
		}
	}
});