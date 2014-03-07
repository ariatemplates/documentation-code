Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.scroll.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleContainer", {
                scrollTop : "0",
                scrollLeft : "1050"
            });
		}
	}
});
