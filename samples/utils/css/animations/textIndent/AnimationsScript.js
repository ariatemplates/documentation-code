Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.textIndent.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                textIndent: "40"
          	});
		}			
	}
});