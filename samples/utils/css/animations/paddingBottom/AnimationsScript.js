Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.paddingBottom.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                paddingBottom: "0"
          	});
		}			
	}
});