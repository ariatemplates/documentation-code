Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.lineHeight.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                lineHeight: "80"
          	});
		}			
	}
});