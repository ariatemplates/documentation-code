Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.right.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                right: "-50"
          	});
		}			
	}
});