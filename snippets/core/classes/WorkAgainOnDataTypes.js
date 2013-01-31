Aria.classDefinition({
	$classpath : "snippets.core.classes.WorkAgainOnDataTypes",

	$dependencies : [ "aria.utils.String" /* just one static deps */ ],
	
	$statics : {
		doNothing : function() { }		// the null function
	},
	
	$prototype : {
		__validateJavaScript : function(args) {
			var report = org.thirdparty.parsers.JavaScript.validate(args.uri);
			// ...
		},
		__validatePerlScript : function(args) {
			var report = org.thirdparty.parsers.PerlScript.validate(args.uri);
			// ...
		},
		validateResource : function (scriptUri) {
			// on-demand parser loading ...
			if (aria.utils.String.endsWith(scriptUri, ".js")) {
				Aria.load({
					classes : ["org.thirdparty.parsers.JavaScript"],
					oncomplete : {
						fn : this.__validateJavaScript,
						scope : this,
						args : { uri : scriptUri }
					},
					onerror: this.doNothing
				});
			}
			if (aria.utils.String.endsWith(scriptUri, ".pl")) {
				Aria.load({
					classes : ["org.thirdparty.parsers.PerlScript"],
					oncomplete : {
						fn : this.__validatePerlScript,
						scope : this,
						args : { uri : scriptUri }
					},
					onerror: this.doNothing
				});
			}
		}
	}
});
