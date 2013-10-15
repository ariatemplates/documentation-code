Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.left.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                left: "250"
          	});
		}			
	}
});