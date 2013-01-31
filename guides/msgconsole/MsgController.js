Aria.classDefinition({
	$classpath : 'ariadoc.guides.msgconsole.MsgController',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['ariadoc.guides.msgconsole.MsgControllerInterface'],
  $dependencies: ['aria.core.Timer'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);

    // Test handler to mock responses
    aria.core.IOFiltersMgr.addFilter('ariadoc.guides.msgconsole.mocks.TestMsgHandler');

    this._count=0; // internal counter used to retrieve different data
    this._msgCount=0;
		this._data = {
      retrievalStarted:false,
      retrievalPaused:false,
      lastMsgs: [],
			msgs : []
		};
	},
	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},
	$prototype : {
		$publicInterfaceName : 'ariadoc.guides.msgconsole.MsgControllerInterface',

		startMsgRetrieval : function (cb) {
      this.json.setValue(this._data,"retrievalStarted",true);
      this.json.setValue(this._data,"retrievalPaused",false);
      this._retrieveMsgs();
		},

    pauseMsgRetrieval : function (cb) {
      this.json.setValue(this._data,"retrievalPaused",true);
    },

    _retrieveMsgs:function(cb) {
      if (this._data.retrievalPaused) return;
      this._count++;

      // send the request
      var requestData = {count:this._count};
      this.submitJsonRequest("getMessages", requestData, {
        fn : "_retrieveMsgsResponse",
        scope : this,
        args : cb
      });

    },

		_retrieveMsgsResponse : function (res, args) {
      var cb=args;
			if (res.error) {
				this.$callback(cb);
				return;
			}
			var dataReceived = res.response;

      // TODO post-process messages

      var msgs=dataReceived.messages;
      var m=this._data.msgs, msg;

      // we put last messages first
      for (var i=0, imax=msgs.length;imax>i;i++) {
        msg=msgs[i];
        msg.uid=this._msgCount++; // unique id
        this.json.splice(m,0,0,msg);
      }

      var maxsz=500; // maximum size for the msgs array
      if (m.length>maxsz) this.json.splice(m,maxsz,m.length-maxsz);

      this.json.setValue(this._data,"nbrOfMsgs",m.length);

      // create a timer to retrive the next messages in a few ms
      aria.core.Timer.addCallback({
        fn:this._retrieveMsgs,
        scope:this,
        delay:150
      });
			this.$callback(cb);
		}
	}
});
