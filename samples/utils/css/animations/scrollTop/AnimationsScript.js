Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.scrollTop.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleContainer", {
                scrollTop : "450"
            });
		}			
	}
});