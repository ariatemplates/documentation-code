Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.fieldset.action.FieldsetActionScript',
	$prototype : {
		fieldsetSubmit : function () {
			alert("onSubmit callback on the root fieldset.");
		},
		nestedFieldsetSubmit : function () {
			alert("onSubmit callback on the nested fieldset.");
		},
		nestedFieldsetSubmitReturnTrue : function () {
			alert("onSubmit callback returning true on the nested fieldset.");
			return true;
		}
	}
});