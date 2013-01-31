/**
 * @class samples.templates.views.templates.binding.SortingTemplateScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.sortindicator.binding.SortingTemplateBindingScript',

	$prototype : {
		/**
		 * Callback function to get the sort key for every element.
		 * @param {} o Data about the element to sort. Includes the actual element in o.value, but also meta data in other properties of o.
		 * @return {} The sort key to be used for the element
		 */
		sortByName : function (o) {
			return o.value.name;
		},
		setToolTip : function () {
			this.data.sortOrder = (!this.data.sortOrder || this.data.sortOrder == 'desc') ? "asc" : "desc";
			this.$json.setValue(this.data,'view:tooltip',this.data.sortOrder);
		}
	}
});