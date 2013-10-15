Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.backgroundPositionY.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                backgroundPositionY: "40"
          	});
		}			
	}
});