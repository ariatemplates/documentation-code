Aria.classDefinition({
	$classpath : "snippets.modules.subcontrollers.MyMainController",
	$extends : "aria.templates.ModuleCtrl",
	$implements : ["snippets.modules.subcontrollers.IMyMainController"],
	$constructor : function () {

		// call parent constructor
		this.$ModuleCtrl.constructor.call(this);

		/**
		 * The Data Model
		 * @protected
		 * @type Object
		 */
		this.setData({
			counters : [
			/*
			////#dataModelStruct
			{
				count: 0
			},
			{
				count: 0
			},
			...
			{
				count: 0
			}
			////#dataModelStruct
			*/
			]
		});
	},
	$prototype : {
		// specify the public interface for this module
		$publicInterfaceName : "snippets.modules.subcontrollers.IMyMainController",

		/**
		 * Add a new counter handler in the application
		 * @param {aria.core.JsObject.Callback} what to do next
		 */
		addCounter : function (callback) {

			////#add
			var nextIndex = this.getData().counters.length;
			this.loadSubModules([{
						classpath : "snippets.modules.controller.MyModuleController",
						refpath : "counters",
						arrayIndex : nextIndex
					}], callback);

			////#add
		}

		/* callbak signature
		////#loadSubModulesCbSignature
		{
      errors : 0, // number of sub module controllers that could not be loaded
      subModules : [...] // list of the sub module controller instances created
    }
    ////#loadSubModulesCbSignature
		*/

	}
});