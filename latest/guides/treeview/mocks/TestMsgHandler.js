Aria.classDefinition({
	$classpath : 'ariadoc.guides.treeview.mocks.TestMsgHandler',
	$extends : 'aria.core.IOFilter',
	$constructor : function () {
    this._count=0;
		this.$IOFilter.constructor.call(this);		
	},
	$prototype : {
		/**
		 * Method called before a request is sent to get a chance to change its arguments
		 * @param {aria.core.RequestMgr.FilterRequest} req
		 */
		onRequest : function (req) {
			this.redirectToFile(req, "ariadoc/guides/treeview/mocks/data.xml");
		}
	}
});
