/**
 * Object in charge of the airport map background management
 */
Aria.classDefinition({
  $classpath : 'ariadoc.guides.airportmap.view.svg.MapCanvas',
  $dependencies: [
                  'aria.utils.Json',
                  'ariadoc.guides.airportmap.view.svg.FlightsLayer'
                  //TODO add raphael.js
  ],
  /**
   * Constructor
   * @param {JSON} dataModel Data model associated to the map
   * @param {JSON} attr display attributes (e.g. containerId)
   */
  $constructor : function (dataModel,attr) {
    // attr={con
    this._data=dataModel;
    this._containerId=attr.containerId;
    this._paper=null;
    this.json=aria.utils.Json;
    this._drag={
      processing:false, // true when drag&drop is being processed
      lastX:0,          // last x position when last event was received
      lastY:0           // last y position when last event was received
    };
    this.layerMgrs={};

   },
  $destructor : function () {
    this._data=null;
    this._paper=null;
    this.json=null;
    if (this._bkgImg) {
      this._bkgImg.remove();
      this._bkgImg=null; // TODO: dispose?
    }
    this._drag=null;
    for (k in this.layerMgrs) {
      this.layerMgrs[k].$dispose();
      delete this.layerMgrs[k];
    }
  },
  $prototype : {

    /**
     * Create the airport map in the html container specified in the class constructor
     */
    createMap:function() {
      if (!this._paper) {
        var vp=this._data.viewPort;

        this._paper=Raphael(this._containerId, this._data.viewPort.hDim, this._data.viewPort.vDim);

        // add listeners to the datamodel
        this.json.addListener(vp,"zoom",{fn:this.updateZoom,scope:this});

        // add image
        // TODO remove hard-coded path from module folder
        this._bkgImg=this._paper
          .image("view/imgs/airport.jpg",0,0,this._data.viewPort.hDim, this._data.viewPort.vDim)
          .attr({rx:2,ry:2})
          .drag(this.__bkgImgDragMove,this.__bkgImgDragStart,this.__bkgImgDragEnd,this,this,this);

        // create layer managers
        this.layerMgrs.flights=new ariadoc.guides.airportmap.view.svg.FlightsLayer(this._paper,this._data.layers.flights);

        this.updateZoom();
        this.refreshDisplay();
      };

      return this._paper;
    },

    /**
     * Synchronize the svg zoom with the values in the data model
     * Automatically called through a data listener
     */
    updateZoom:function() {
      if (!this._paper) return;
      var zoom=this._data.viewPort.zoom;
      if (zoom<1) {
        Aria.$logError("Invalid Zoom Factor:"+zoom);
        return;
      }

      var vp=this._data.viewPort;
      this._moveViewBox(vp.hPosition,vp.vPosition, true);
    },

    /**
     * Move the zoom/view box to the x,y position
     */
    _moveViewBox:function (x,y) {
      var pos={hPos:x,vPos:y};
      if (pos.hPos<0) pos.hPos=0;
      if (pos.vPos<0) pos.vPos=0;

      var vp=this._data.viewPort;
      var zoom=vp.zoom;

      var maxHPos=Math.floor(((zoom-1)*vp.hDim)/zoom);
      var maxVPos=Math.floor(((zoom-1)*vp.vDim)/zoom);
      if (pos.hPos>maxHPos) pos.hPos=maxHPos;
      if (pos.vPos>maxVPos) pos.vPos=maxVPos;

      // update data model
      this.json.setValue(vp,"hPosition",pos.hPos);
      this.json.setValue(vp,"vPosition",pos.vPos);

      // show the move cursor position if zoom>1
      this._bkgImg.attr({cursor:((zoom>1)?"move" : "default")});

      this._paper.setViewBox(pos.hPos,pos.vPos,Math.floor(vp.hDim/zoom),Math.floor(vp.vDim/zoom));
    },

    /**
     * Event Handler for the background image drag start
     */
    __bkgImgDragStart:function(x,y,evt) {
      if (this._data.viewPort.zoom<=1) {
        // no drag & drop for zoom 1
        this._drag.processing=false;
        return;
      }
      var vp=this._data.viewPort, dr=this._drag;
      dr.processing=true;
      dr.lastX=x;
      dr.lastY=y;
    },

    /**
     * Event Handler for the background image drag move
     */
    __bkgImgDragMove:function(dx,dy,x,y,evt) {
      if (!this._drag.processing) return;
      var vp=this._data.viewPort, dr=this._drag;
      var zoom=vp.zoom;

      this._moveViewBox(vp.hPosition+Math.floor((dr.lastX-x)/zoom),vp.vPosition+Math.floor((dr.lastY-y)/zoom));
      dr.lastX=x;
      dr.lastY=y;
    },

    /**
     * Event Handler for the background image drag end
     */
    __bkgImgDragend:function(evt) {
      this._drag.processing=false;
    },

    /**
     * Refresh the layers objects
     */
    refreshDisplay:function() {
       for (k in this.layerMgrs) {
         this.layerMgrs[k].refresh();
       }
    }

  }
});