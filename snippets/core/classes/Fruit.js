////#stub
Aria.classDefinition({
	$classpath : 'snippets.core.classes.Fruit',
////#stub
	$implements : [
		'snippets.core.classes.IColorfulObject'
	],
	$dependencies : [
		'snippets.core.classes.Gardener'
	],
	$constructor : function () {
		// ...
	},
	$destructor : function () {
		// ...
	},
	$statics : {
		DEFAULT_COLOR : "White"					// used for fade out ...
	},
	$events : {
		"squeeze" : {
			description : "The fruit is currently being squeezed.",
			properties : {}
		}
	},
	$prototype : {
		__setColorDefaultCB : function() {
			// ...
		},
		getColor : function () {				// defined at interface level
			// ...
		},
		setColor : function (color, customCB) {
			var cb = customCB || this.__setColorDefaultCB;
			// ...
			this.$raiseEvent("colorChange");	// defined at interface level
		},
		fadeOut : function() {
			this.setColor(this.DEFAULT_COLOR);
		},
		squeezeIt : function() {				// extra method
			// ...
			this.$raiseEvent("squeeze");		// defined at class level
		}
	}
////#stub
	// ...
});
////#stub
