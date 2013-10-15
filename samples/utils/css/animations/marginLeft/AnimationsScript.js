Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.marginLeft.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                marginLeft: "250"
          	});
		}			
	}
});