Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.outlineWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                outlineWidth: "15"
          	});
		}			
	}
});