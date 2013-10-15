Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.queue1.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
				top: "200px",
				left: "200px"
            },
            {
				queue: true
            });

            aria.utils.css.Effects.animate("exampleDiv", {
				top: "0",
				left: "200px"
            },
            {
				queue: true
            });

            aria.utils.css.Effects.animate("exampleDiv", {
				top: "0",
				left: "0"
            },
            {
				queue: true
            });
		}			
	}
});