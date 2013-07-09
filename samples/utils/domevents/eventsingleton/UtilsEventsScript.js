/**
 * Template script definition for samples.utils.domevents.eventsingleton.UtilsEventsScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.utils.domevents.eventsingleton.UtilsEventsScript',
	$dependencies : ['aria.utils.Event'],
	$constructor : function () {
		aria.utils.Event.addListener(document, "keydown", {
			fn : this.__onBodyKeydown,
			scope : this
		});
	},
	$destructor : function () {
		aria.utils.Event.removeListener(document, "keydown", {
			fn : this.__onBodyKeydown,
			scope : this
		});
	},
	$prototype : {
		$dataReady : function () {
			this.data.selected = 1;
		},

		$afterRefresh : function () {
			var selectedIndex = this.data.selected;
			var selectedBox = this.$getElementById("num" + selectedIndex);
			selectedBox.focus();
		},

		/**
		 * Callback to the global keydown listener
		 * @param {Event} evt
		 * @private
		 */
		__onBodyKeydown : function (evt) {
			var index=0;
			if (evt.keyCode > 48 && evt.keyCode < 58) {
				index = evt.keyCode - 48;
			} else if (evt.keyCode > 96 && evt.keyCode < 106) {
				index = evt.keyCode - 96;
			}
			if (index) {
				this.$getElementById("num" + index).focus();
			}
		},

		/**
		 * Retrieve the index stored in the dedicated expando of a dom element, if available
		 * @param {aria.templates.DomElementWrapper} domEl
		 * @private
		 */
		__getTargetIndex : function (domEl) {
			if (domEl.tagName.toLowerCase() != "input") {
				return;
			}
			var indexExpando = domEl.getData("index");
			if (indexExpando) {
				return parseInt(indexExpando,10);
			}
		},
		/**
		 * Callback triggered when the user clicks on a selectable box.
		 * The index of the clicked box is taken from the args object passed to the callback
		 * This value is stored in the data model. Then refresh the template to actualize the view.
		 * @param {aria.utilsDomEventWrapper} evt : The event that triggered the call
		 * @param {Object} args : {index:@type Number}
		 */
		onCheckboxKeydown : function (evt) {
			var index= this.__getTargetIndex(evt.target),
				selectedIndex;
			var keyCode = evt.keyCode;
			if (keyCode == evt.KC_ARROW_DOWN) {
				selectedIndex = index+3;
			} else if (keyCode == evt.KC_ARROW_UP) {
				selectedIndex = index-3;
			} else if (keyCode == evt.KC_ARROW_LEFT) {
				selectedIndex = index-1;
			} else if (keyCode == evt.KC_ARROW_RIGHT) {
				selectedIndex = index+1;
			}

			if (!isNaN(selectedIndex)) {
				evt.preventDefault();
			}

			if (selectedIndex > 0 && selectedIndex < 10){
				this.$getElementById("num" + selectedIndex).focus();
			}
		},
		onCheckboxFocus : function (evt) {
			var index= this.__getTargetIndex(evt.target);
			if (index != this.data.selected ) {
				this.$getElementById("box" + index).classList.setClassName("container box selected");
				this.$getElementById("box" + this.data.selected).classList.setClassName("container box");
				this.$json.setValue(this.data, "selected", index);
			}
		}
	}
});