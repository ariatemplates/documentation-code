Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.Disk",
	$extends : "ariadoc.snippets.core.classes.Device",

	$constructor : function (id, size) {
		this.$Disk.constructor.call(this, id); // call superclass constructor
		this.__size = size;
	},

	$prototype : {
		size : function () {
			return this.__size;
		}
	}
});
