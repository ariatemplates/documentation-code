Aria.classDefinition({
	$classpath : 'snippets.core.classes.Vegetable',
	$extends : 'snippets.core.classes.Plant',

	$constructor : function (myArg) {
		var parentArg = "some argument for the parent constructor";
		this.$Plant.constructor.call(this, myArg, parentArg);
		// ...
	},

	$destructor : function () {
		this.$Plant.$destructor.call(this);
		// ...
	},

	$prototype : {
		// methods here ...
	}
});
