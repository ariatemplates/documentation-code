Aria.interfaceDefinition({
	$classpath : "samples.modules.standard.IMyModuleController",
	$extends : 'aria.templates.IModuleCtrl',
	$interface : {
		/**
		 * Increment the value of the counter inside the data model.
		 */
		incrementCount : function () {}
	}
});