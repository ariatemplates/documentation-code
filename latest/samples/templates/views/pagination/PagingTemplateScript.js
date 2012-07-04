/**
 * @class samples.templates.views.pagination.PagingTemplateScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.views.pagination.PagingTemplateScript',
	$prototype : {
		/**
		 * Initializes the variables in the data model
		 */
		initVariables : function () {
			this.aview.setPageSize(3);
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