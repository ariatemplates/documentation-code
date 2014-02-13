Aria.classDefinition({
	$classpath : 'ariadoc.guides.airportmap.Controller',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['ariadoc.guides.airportmap.ControllerInterface'],
  $dependencies: ['aria.core.Timer'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);

    // add test filter for response mocks
    aria.core.IOFiltersMgr.addFilter('ariadoc.guides.airportmap.mocks.TestMsgHandler');

		this._data = {
      pollTimeout:500,// by default new data will be requested every 500ms
      viewPort:{
        hDim:1129,    // horizontal dimension
        vDim:726,     // vertical dimension
        zoom:1,       // zoom level - cannot be <1
        hPosition:0,  // horizontal position of the viewport when zoom>1
        vPosition:0   // vertical position of the viewport when zoom>1
      },
      layers:{

      }
		};
	},
	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},
	$prototype : {
		$publicInterfaceName : 'ariadoc.guides.airportmap.ControllerInterface',

    /**
     * Retrieve the data to be displayed on the map
     * @param {Callback} cb
     */
    loadData: function(cb) {
      aria.core.IO.asyncRequest({
        url: "getData",
        expectedResponseType : "json",
        callback: {
          fn : this._loadData,
          scope : this,
          args : cb
        }
      });
    },

    /**
     * loadData internal callback - called when the server response is received
     * @param {} res the submitJsonRequest return value
     * @param {Callback} args
     */
    _loadData:function (res, cb) {
      if (res.error) {
        this.$callback(cb);
        return;
      }
      var ds = res.responseJSON;

      // add dataset to the list and select it
      this.json.setValue(this._data,"layers", ds.layers);

      this._queueDataUpdate();
      this.$callback(cb);
    },

    /**
     * queue a request to updateData
     */
    _queueDataUpdate:function() {
      // trigger polling
      var interfaceWrapper=this.$interface(this.$publicInterfaceName)

      aria.core.Timer.addCallback({
        fn:interfaceWrapper.updateData,
        scope:interfaceWrapper,
        delay:this._data.pollTimeout
      });
    },

    /**
     * Update the zoom factor
     * Note: the call will be ignored if the increment results in a zoom which is less than 1
     * @param {int} increment the update factor - can be positive or negative, if 0 the zoom will be reset
     */
    zoom: function (increment) {
      var zoom2=this._data.viewPort.zoom+increment;
      if (increment==0) zoom2=1
      if (zoom2>=1) {
        this.json.setValue(this._data.viewPort,"zoom",zoom2);
      }
    },

    /**
     * Sends a request to get updated data
     * This request is automatically polled once loadData has been called
     */
    updateData:function(cb) {
      // send the request
      aria.core.IO.asyncRequest({
        url: "getDataUpdates",
        expectedResponseType : "json",
        callback: {
          fn : this._updateDataResponse,
          scope : this,
          args : cb
        }
      });
    },

    _updateDataResponse:function(res,args) {
      var cb=args;
      if (res.error) {
        this.$callback(cb);
        return;
      }
      var ds = res.responseJSON;

      // go through each layer and update the data model with the response data
      if (ds.layers && ds.layers.flights) {
        if (!this._data.layers) this.json.setValue(this._data,"layers",{flights:{}});
        else if (!this._data.layers.flights) this.json.setValue(this._data.layers,"flights",{});
        var flights=this._data.layers.flights;

        var newItems=ds.layers.flights.items, newItem, item;

        for (var key in newItems) {
          newItem=newItems[key];
          item=flights.items[key];
          if (!item) {
            // new flight
            this.json.setValue(flights.items,key,newItem);
          } else {
            // new postions
            if (newItem.positions) {
              // append new positions to the position list
              for (var p=0, max=newItem.positions.length;max>p;p++) {
                this.json.add(item.positions,newItem.positions[p])          ;
              }
              // splice if more than 20 positions
              var maxsz=20;
              if (item.positions.length>maxsz) {
                this.json.splice(item.positions,0,item.positions.length-maxsz);
              }

            }
          }
        }
      }

      // TODO don't forget mechanism to flush un-used data - e.g. when a plane has taken-off

      this._queueDataUpdate();
    }

	}
});
