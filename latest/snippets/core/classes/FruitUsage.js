Aria.classDefinition({
	$classpath : "snippets.core.classes.FruitUsage",
	$dependencies : ["snippets.core.classes.Fruit"],

	$singleton : true,

	$prototype : {
		execute : function () {
			////#execute
			var aFruit = new snippets.core.classes.Fruit();

			// do something
			alert("Fruit color: " + aFruit.getColor());

			// delete
			aFruit.$dispose();
			delete aFruit;
			////#execute
		}
	}
});
