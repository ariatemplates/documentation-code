Aria.classDefinition({
	$classpath : 'ariadoc.guides.treeview.Controller',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['ariadoc.guides.treeview.ControllerInterface'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);

    // add test filter for response mocks
    aria.core.IOFiltersMgr.addFilter('ariadoc.guides.treeview.mocks.TestMsgHandler');

		this._data = {
      menu:null
    };
	},
	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},
	$prototype : {
		$publicInterfaceName : 'ariadoc.guides.treeview.ControllerInterface',

    /**
     * Load some data to display in the treeview
     * @param {String} param sample parameter
     * @param {aria.core.JsObject.Callback} cb callback
     */
		loadData : function (param,cb) {
       var requestData = {myparam:param}; // set json rewquest params here
       this.submitJsonRequest("getData", requestData, {
        fn : "_loadData",
        scope : this,
        args : cb
      });
		},

    /**
     * loadDataset callback - called when server response is received
     * @param {Object} res the return value of submitJsonrequest
     * @param {Callback} args the callback arcugment passed by loadDataset
     */
    _loadData: function (res, args) {
      var cb=args;
      if (res.error) {
        this.$callback(cb);
        return;
      }
      var ds = res.response;

      // add dataset to the list and select it
      this.json.setValue(this._data,"menu",ds.menu);
      this.$callback(cb);
    }
	}
});
