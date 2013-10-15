Aria.tplScriptDefinition({
	$classpath:  'utils.css.AnimationsScript',
	$prototype:{
		setAnimations : function () {
		////#utlAnimations
			aria.utils.css.Effects.animate("HtmlElementId", {
                width: "250"
          	});
		////#utlAnimations
		}
	}
});