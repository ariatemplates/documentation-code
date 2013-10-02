Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.units.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
				width: "20em",
				marginLeft: "30%"
            });
		}			
	}
});