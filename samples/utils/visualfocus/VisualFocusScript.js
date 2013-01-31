Aria.tplScriptDefinition({
	$classpath:  'samples.utils.visualfocus.VisualFocusScript',
	$prototype:{
		setVisualFocus : function () {
			aria.core.AppEnvironment.setEnvironment({
				appOutlineStyle : this.outlineStyle.style
			}, null, true);
		},
		resetVisualFocus : function () {
			aria.core.AppEnvironment.setEnvironment({
				appOutlineStyle : null
			}, null, true);
		}
	}
});