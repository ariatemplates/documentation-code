Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderRightWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderRightWidth: "8"
          	});
		}			
	}
});