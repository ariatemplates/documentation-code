Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.marginTop.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                marginTop: "80"
          	});
		}			
	}
});