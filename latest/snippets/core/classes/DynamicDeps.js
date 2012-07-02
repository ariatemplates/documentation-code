Aria.classDefinition({
	$classpath : "snippets.core.classes.DynamicDeps",

	$dependencies : [ "aria.utils.String" /* just one static dep */ ],
	
	$statics : {
		__doNothing : function() { }			// the null function
	},
	
	$prototype : {
		__validateJavaScript : function(args) {
			var report = org.thirdparty.parsers.JavaScript.validate(args._uri);
			// ...
		},
		__validatePerlScript : function(args) {
			var report = org.thirdparty.parsers.PerlScript.validate(args._uri);
			// ...
		},
		__validateScript : function(uri, validatorId, callback) {
			Aria.load({
				classes : [ validatorId ],
				oncomplete : {
					fn : callback,
					scope : this,
					args : { _uri : uri }
				},
				onerror: this.__doNothing		// default behaviour ...
			});
		},
		validateScript : function (scriptUri) {
			// on-demand parser loading ...
			if (aria.utils.String.endsWith(scriptUri, ".js")) {
				this.__validateScript(
					scriptUri,
					"org.thirdparty.parsers.JavaScript",
					this.__validateJavaScript
				);
			}
			if (aria.utils.String.endsWith(scriptUri, ".pl")) {
				this.__validateScript(
					scriptUri,
					"org.thirdparty.parsers.PerlScript",
					this.__validatePerlScript
				);
			}
		}
	}
});
