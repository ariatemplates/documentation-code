Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.width.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                width: "250"
          	});
		}			
	}
});