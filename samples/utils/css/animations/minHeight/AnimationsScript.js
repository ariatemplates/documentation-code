Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.minHeight.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                minHeight: "80"
          	});
		}			
	}
});