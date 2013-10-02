Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderLeftWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderLeftWidth: "8"
          	});
		}			
	}
});