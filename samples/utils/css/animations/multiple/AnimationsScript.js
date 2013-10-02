Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.multiple.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
				width: "200",
				height: "40",
				letterSpacing: "8",
				fontSize: "15",
				top: "70",
				left: "400"
            });
		}			
	}
});