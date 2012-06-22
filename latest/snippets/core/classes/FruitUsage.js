Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.FruitUsage",
	$dependencies : ["ariadoc.snippets.core.classes.Fruit"],

	$singleton : true,

	$prototype : {
		execute : function () {
			////#execute
			var aFruit = new ariadoc.snippets.core.classes.Fruit();

			// do something
			alert("Fruit color: " + aFruit.getColor());

			// delete
			aFruit.$dispose();
			delete aFruit;
			////#execute
		}
	}
});
