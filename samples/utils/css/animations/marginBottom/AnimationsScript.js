Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.marginBottom.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                marginBottom: "250"
          	});
		}			
	}
});