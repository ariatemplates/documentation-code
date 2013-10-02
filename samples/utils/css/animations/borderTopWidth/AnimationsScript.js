Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderTopWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderTopWidth: "8"
          	});
		}			
	}
});