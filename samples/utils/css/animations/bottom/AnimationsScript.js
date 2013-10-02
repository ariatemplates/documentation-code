Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.bottom.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                bottom: "10"
          	});
		}			
	}
});