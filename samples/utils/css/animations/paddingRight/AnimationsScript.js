Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.paddingRight.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                paddingRight: "0"
          	});
		}			
	}
});