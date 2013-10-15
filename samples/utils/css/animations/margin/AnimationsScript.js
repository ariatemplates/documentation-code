Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.margin.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                margin: "80"
          	});
		}			
	}
});