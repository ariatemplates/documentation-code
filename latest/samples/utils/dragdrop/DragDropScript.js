Aria.tplScriptDefinition({
	$classpath : "samples.utils.dragdrop.DragDropScript",
	$dependencies : ["aria.utils.Mouse", "aria.utils.dragdrop.Drag"],
	$destructor : function () {
		this._dialog.$dispose();
		this._dragOne.$dispose();
		this._dragTwo.$dispose();
		this._dragThree.$dispose();
		this._dragFour.$dispose();
	},
	$prototype : {
		$displayReady : function () {
			this._dialog = new aria.utils.dragdrop.Drag("dialog-container", {
				handle : "dialog-title",
				cursor : "pointer",
				proxy : {
					type : "CloneOverlay"
				}
			});
			this._dragOne = new aria.utils.dragdrop.Drag("constrained-draggable", {
				cursor : "move",
				proxy : {
					type : "CloneOverlay"
				},
				constrainTo : "first-boundary"
			});
			this._dragTwo = new aria.utils.dragdrop.Drag("vertical-draggable", {
				cursor : "move",
				constrainTo : "second-boundary",
				axis : "y"
			});
			this._dragFour = new aria.utils.dragdrop.Drag("free-draggable");

		}
	}
});