Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.paddingLeft.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                paddingLeft: "0"
          	});
		}			
	}
});