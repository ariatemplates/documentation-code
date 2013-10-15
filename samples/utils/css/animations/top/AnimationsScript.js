Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.top.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                top: "250"
          	});
		}			
	}
});