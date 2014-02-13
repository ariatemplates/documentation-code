Aria.classDefinition({
	$classpath : 'ariadoc.guides.spreadsheet.mocks.TestMsgHandler',
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
	    var idx=(this._count++ %2)+1;
			this.redirectToFile(req, "ariadoc/guides/spreadsheet/mocks/dataset"+idx+".json");
		}
	}
});
