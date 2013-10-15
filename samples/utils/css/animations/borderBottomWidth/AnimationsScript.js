Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.borderBottomWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                borderBottomWidth: "8"
          	});
		}			
	}
});