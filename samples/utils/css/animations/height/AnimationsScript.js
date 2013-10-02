Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.height.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                height: "35"
          	});
		}			
	}
});