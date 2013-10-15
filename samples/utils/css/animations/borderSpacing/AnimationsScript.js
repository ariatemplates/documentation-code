Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderSpacing.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderSpacing: "15"
          	});
		}			
	}
});