Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.sampleUsage.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                width: "250"
          	});
		}			
	}
});