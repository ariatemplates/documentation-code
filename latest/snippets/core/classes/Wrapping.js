Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.Wrapping",
	$dependencies : ["ariadoc.snippets.core.classes.Fruit"],

	$singleton : true,

	$prototype : {
		////#execute
		execute : function () {
			
			var aFruit = new ariadoc.snippets.core.classes.Fruit();
	
			aFruit.setColor("Green");
			aFruit.squeezeIt();		// extra method accessible
	
			var wrapperOne = aFruit.$interface("ariadoc.snippets.core.classes.ColorfulObject");
	
			aFruit.setColor("Red");
			wrapperOne.squeezeIt(); // extra method NOT accessible
	
			var wrapperTwo = aFruit.$interface("ariadoc.snippets.core.classes.ColorfulObject");
	
			if (wrapperTwo == wrapperOne) {
				alert("The $interface method reuses the same wrapper when possible.");
			}
	
			// get a direct wrapper to the superinterface
			var parentWrapper = obj.$interface("ariadoc.snippets.core.classes.IObject");
	
			aFruit.$dispose();
			
		}
		////#execute
	}
});
