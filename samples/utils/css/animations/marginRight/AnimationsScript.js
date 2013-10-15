Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.marginRight.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                marginRight: "250"
          	});
		}			
	}
});