Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.easing2.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                width: "250"
          	},
          	{
          		easing : function(x){
          			return Math.pow(x, 4)
          		}
          	});
		}			
	}
});