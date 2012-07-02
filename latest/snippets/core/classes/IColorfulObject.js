Aria.interfaceDefinition({
	$classpath : "snippets.core.classes.IColorfulObject",

	// single interface inheritance only ...
	$extends : "snippets.core.classes.IObject",

	$events : {
		"colorChange" : {
			description : "The color of the fruit has been changed.",
			properties : {}
		}
	},

	$interface : {
		getColor : function()      { /* empty */ },
		setColor : {				// usually employed for async apps
			$type : "Function",
			$callbackParam : 1		// cb will be the 2nd atgument to the function
		},
		fadeOut : "Function"		// alternative empty function() syntax
	}
});
