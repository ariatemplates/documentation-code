Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.minWidth.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                minWidth: "150"
          	});
		}			
	}
});