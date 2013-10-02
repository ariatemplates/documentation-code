Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.wordSpacing.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                wordSpacing: "30"
          	});
		}			
	}
});