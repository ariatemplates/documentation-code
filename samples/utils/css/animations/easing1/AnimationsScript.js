Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.easing1.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                width: "250"
          	},
          	{
          		easing : "ease-in-out"
          	});
		}			
	}
});