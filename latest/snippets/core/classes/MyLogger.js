Aria.classDefinition({
    $classpath: "ariadoc.snippets.core.classes.MyLogger",
    $singleton: true,
    
    $prototype: {
    	
    	logAlert: function(msg) {
    		alert(msg);
    	},
    	
    	logHTML: function(e, msg) {
    		e.innerHTML = msg;
    	}
    	
    }
});
