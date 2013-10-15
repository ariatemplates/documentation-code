Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.padding.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                padding: "30"
          	});
		}			
	}
});