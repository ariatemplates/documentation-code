Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.scrollLeft.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleContainer", {
                scrollLeft : "1050"
            });
		}			
	}
});