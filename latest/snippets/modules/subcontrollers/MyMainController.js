Aria.classDefinition({
	$classpath : "ariadoc.snippets.modules.subcontrollers.MyMainController",
	$extends : "aria.templates.ModuleCtrl",
	$implements : ["ariadoc.snippets.modules.subcontrollers.IMyMainController"],
	$constructor : function () {

		// call parent constructor
		this.$ModuleCtrl.constructor.call(this);

		/**
		 * The Data Model
		 * @protected
		 * @type Object
		 */
		this.setData({
			counters : []
		});
	},
	$prototype : {
		// specify the public interface for this module
		$publicInterfaceName : "ariadoc.snippets.modules.subcontrollers.IMyMainController",
		
		/**
		 * Add a new counter handler in the application
		 * @param {aria.core.JsObject.Callback} what to do next
		 */
		addCounter : function (callback) {
			
			////#add
			
			var nextIndex = this.getData().counters.length;
			this.loadSubModules([{
						classpath : "ariadoc.snippets.modules.controller.MyModuleController",
						refpath : "counters",
						arrayIndex : nextIndex
					}], callback);
					 
			////#add
		}
		
	}
});