Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderWidth: "8"
          	});
		}			
	}
});