Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.letterSpacing.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                letterSpacing: "50"
          	});
		}			
	}
});