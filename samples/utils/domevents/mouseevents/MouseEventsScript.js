Aria.tplScriptDefinition({
	$classpath : 'samples.utils.domevents.mouseevents.MouseEventsScript',
	$dependencies : [],
	$prototype : {
		/**
		 * Callback triggered when the user clicks on a selectable box.
		 * The index of the clicked box is taken from the args object passed to the callback
		 * This value is stored in the data model. Then refresh the template to actualize the view.
		 * @param {aria.utilsDomEventWrapper} evt : The event that triggered the call
		 * @param {Object} args : {index:@type Number}
		 */
		onBoxClick : function (evt, args) {
			this.data.selected = args.index;
			this.$refresh();
		}
	}
});