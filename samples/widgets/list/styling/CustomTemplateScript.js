Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.list.styling.CustomTemplateScript',
	$constructor : function () {
		/**
		 * Name of the element containing the displayed list items
		 * @protected
		 * @type {String}
		 */
		this._refContainer = "myList";

		/**
		 * If necessary, shift between the item index and the child index in the dom
		 * @protected
		 * @type {Number}
		 */
		this._itemShift = 1;
	},
	$prototype : {

		/**
		 * Called when ListController triggers an event.
		 * @param {Object} evt the event object
		 */
		onModuleEvent : function (evt) {
			if (evt.name == "onChange") {
				if (!evt.selectedIndexes && !evt.unselectedIndexes) {
					// No info about changed items.
					// Only solution is to refresh the whole items section
					this.$refresh({
						section : 'Items'
					});
				}
			} else if (evt.name == "focusList") {

				var focusIndex = this.data.focusIndex ? this.data.focusIndex : 0;

				var viewFocusIndex = this.data.itemsView.items[focusIndex].value.index;

				var idToFocus = 'listItem' + viewFocusIndex;

				this.$focus(idToFocus);

			} else if (evt.name == "keyevent") {

				if (evt.keyCode == aria.DomEvent.KC_ARROW_UP && evt.focusIndex == 0) {
					evt.cancelDefault = true;
					// var idToFocus = 'listItem'+evt.focusIndex;
					var viewFocusIndex = this.data.itemsView.items[evt.focusIndex].value.index;

					var idToFocus = 'listItem' + viewFocusIndex;

					this.$focus(idToFocus)

				}

			}
		},

		/**
		 * This is used to handle a click on the td of a table view item. This raised a click event as if the user has
		 * clicked on a check box, even though they actually clicked on a td.
		 * @param {aria.templates.DomEventWrapper} evt A click event on a td of a table view item
		 * @param {Object} item object with two properties: item (aria.widgets.form.list.CfgBeans.Item) and itemIdx
		 * (number).
		 */
		itemTableClick : function (evt, item) {

			this.itemClick(evt, item, false);

		},

		/**
		 * Event handler to notify the module controller when an item is clicked
		 * @param {aria.templates.DomEventWrapper} evt Dom event.
		 * @param {Object} item object with two properties: item (aria.widgets.form.list.CfgBeans.Item) and itemIdx
		 * (number).
		 * @param {Boolean} dataModelAlreadyUpdated whether the data model was already updated (default: true)
		 */
		itemClick : function (evt, item, dataModelAlreadyUpdated) {
			if (dataModelAlreadyUpdated == null) {
				dataModelAlreadyUpdated = true;
			}
			var itemIdx = evt.target.getExpando("itemIdx");
			if (!this.data.disabled) {
				this.moduleCtrl.itemClick(itemIdx, dataModelAlreadyUpdated);
			}
		},

		/**
		 * Gets the class name of an item depending on the data in the item (selected etc)
		 * @param {aria.widgets.form.list.CfgBeans.Item} item The list item object to decide the class name for
		 * @return {String} The class name. May consist of multiple classes.
		 */
		_getClassForItem : function (item) {
			var retVal = [this.data.skin.cssClassItem];
			if (item.selected) {
				retVal.push(this.data.skin.cssClassSelected);
			}
			if (this.data.disabled) {
				retVal.push(this.data.skin.cssClassDisabled);
			} else {
				retVal.push(this.data.skin.cssClassEnabled);
			}
			return retVal.join(' ');
		}
	}
});
