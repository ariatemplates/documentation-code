Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.fontSize.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                fontSize: "30"
          	});
		}			
	}
});