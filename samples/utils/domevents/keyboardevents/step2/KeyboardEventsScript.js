Aria.tplScriptDefinition({
	$classpath : 'samples.utils.domevents.keyboardevents.step2.KeyboardEventsScript',
	$dependencies : [],
	$prototype : {
		$dataReady : function () {
			this.data.selected = 1;
			this.data.checked = {};
		},
		
		$afterRefresh : function () {
			var selectedIndex = this.data.selected || 1;
			var selectedBox = this.$getElementById("num" + selectedIndex);
			selectedBox.focus();
		},
		/**
		 * Callback triggered when the user clicks on a selectable box.
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
			
			if (!isNaN(selectedIndex)) {
				evt.preventDefault();
			}
			if (selectedIndex > 0 && selectedIndex < 10){
				this.data.selected = selectedIndex;
				if (aria.core.Browser.isIE) {
					this.$getElementById("num" + selectedIndex).focus();
				}
				this.$refresh();
			}
		},
		onCheckboxChange : function (evt, args) {
			var index= args.index;
			this.data.checked["num"+index] = !this.data.checked["num"+index];
		}
	}
});