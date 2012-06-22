Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.CustomLogger",
	$singleton : true,
	
	$statics : {
		DEFAULT_LEVEL : "INFO"
	},

	$constructor : function () {
		this.$on({
			"logLevelChange" : function (evt) {
				if (evt.src["level"]) {
					this.setLogLevel(evt.src["level"]);
				} else {
					this.setLogLevel(this.DEFAULT_LEVEL);
				}
			},
			scope : this
		});
	},

	$prototype : {
		// Methods goes here ...
	}
});
