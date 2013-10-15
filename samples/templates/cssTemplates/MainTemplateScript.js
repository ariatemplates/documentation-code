Aria.tplScriptDefinition({
	$classpath : 'samples.templates.cssTemplates.MainTemplateScript',
	$prototype : {

		/**
		 * Change the class of the element
		 * @param {aria.templates.DomEventWrapper} evt event that triggered the call of this function
		 * @param {Object} id contains the id of the element to change
		 */
		changeClass : function (evt, args) {
			var el = this.$getElementById(args.id);
			var cssClass = el.classList.getClassName();
			if (cssClass == "shoppingItemTaken") {
				el.classList.setClassName("shoppingItem");
			} else {
				el.classList.setClassName("shoppingItemTaken");
			}
		}
	}
});