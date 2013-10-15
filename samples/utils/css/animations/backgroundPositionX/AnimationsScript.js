Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.backgroundPositionX.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                backgroundPositionX: "40"
          	});
		}			
	}
});