Aria.tplScriptDefinition({
	$classpath : 'samples.utils.domevents.keyboardevents.step1.KeyboardEventsScript',
	$dependencies : [],
	$prototype : {
		$dataReady : function () {
			this.data.selected = 1;
		},

		/**
		 * After refresh maintain the focus on the selected item
		 */
		$afterRefresh : function () {
			var selectedIndex = this.data.selected || 1;
			var selectedBox = this.$getElementById("num" + selectedIndex);
			selectedBox.focus();
		},
		/**
		 * Callback triggered when the presses a key while focusing a checkbox.
		 * The index of the clicked box is taken from the args object passed to the callback
		 * This value is stored in the data model. Then refresh the template to actualize the view.
		 * @param {aria.utilsDomEventWrapper} evt : The event that triggered the call
		 * @param {Object} args : {index:@type Number}
		 */
		onCheckboxKeydown : function (evt, args) {
			var index= args.index,
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
			if (selectedIndex > 0 && selectedIndex < 10){
				this.data.selected = selectedIndex;
				evt.preventDefault();
				this.$refresh();
			}
		}
	}
});