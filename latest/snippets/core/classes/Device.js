Aria.classDefinition({
	$classpath : "snippets.core.classes.Device",

	$constructor : function (id) {
		this.__id = id;
		this.__isOn = false; // default value
	},

	$prototype : {
		start : function () {
			this.__isOn = true;
		},

		stop : function () {
			this.__isOn = false;
		},

		id : function () {
			return this.__id;
		},

		isOn : function () {
			return this.__isOn;
		}
	}
});
