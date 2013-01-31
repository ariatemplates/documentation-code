Aria.tplScriptDefinition({
	$classpath : "samples.widgets.list.action.ListActionScript",
	$prototype : {
		listOnChange : function (evt) {
			alert("onChange callback event fired");
		},
		listOnClick : function (evt) {
			alert("onClick callback event fired");
		},
		listOnKeyevent : function (evt) {
			alert("onKeyevent callback event fired");
		},
		listOnMouseOver : function (evt) {
			alert("onMouseOver callback event fired");
		}
	}
});