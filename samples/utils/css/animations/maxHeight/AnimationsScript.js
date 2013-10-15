Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.maxHeight.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                maxHeight: "30"
          	});
		}			
	}
});