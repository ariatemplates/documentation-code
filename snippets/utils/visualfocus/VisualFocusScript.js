Aria.tplScriptDefinition({
	$classpath:  'view.VisualFocusScript',
	$prototype:{
		////#utlVisualFocus
		setVisualFocus : function () {
			aria.core.AppEnvironment.setEnvironment({
				appOutlineStyle : this.outlineStyle.style
			}, null, true);
		}
		////#utlVisualFocus
		resetVisualFocus : function () {
			aria.core.AppEnvironment.setEnvironment({
				appOutlineStyle : null
			}, null, true);
		}
	}
});