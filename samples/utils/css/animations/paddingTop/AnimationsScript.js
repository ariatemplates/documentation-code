Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.paddingTop.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                paddingTop: "50"
          	});
		}			
	}
});