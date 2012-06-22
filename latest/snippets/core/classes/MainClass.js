Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.MainClass",
	$singleton : true,
	$events : {
		"logLevelChange" : {
			description : "Notifies that the logLevel changed.",
			properties : {
				level : "The new log level. If absent reset. (Optional)"
			}
		}
	},
	$prototype : {
		setLogLevel : function (newLevel) {
			this.$raiseEvent({
				name : "logLevelChange",
				level : newLevel
			});
		},
		resetLogLevel : function () {
			this.$raiseEvent("logLevelChange");
		}
	}
});
