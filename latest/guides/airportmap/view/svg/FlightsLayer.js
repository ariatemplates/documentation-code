/**
 * Class in charge of the flights layer
 */
Aria.classDefinition({
  $classpath : 'ariadoc.guides.airportmap.view.svg.FlightsLayer',
  $extends: 'ariadoc.guides.airportmap.view.svg.LayerMgr',
  /**
   * Constructor
   */
  $constructor : function (paper,mapSet,layerData) {
    this.$LayerMgr.constructor.call(this,paper,mapSet,layerData);
    var northAngle=10; // -10 degrees form the y axis
    var shapeAngle=90; // shape path is drawn in this position from the y axis
    this.angleCorrection=northAngle-shapeAngle;
   },
  $destructor : function () {
     this.$LayerMgr.$destructor.call(this);
  },
  $prototype : {
    /**
     * creates the SVG set corresponding to a plane
     * @return the SVG set
     */
    _createElt:function(eltData,key) {
      var pos=eltData.positions[eltData.positions.length-1];

      //var o=this._paper
      //    .image("view/imgs/plane.png",pos.x-7,pos.y-8,14,16);

      var elt=this._drawPlane(null, pos)
        .data("planeId",key)
        .click(this.__planeOnClick);
      this._checkPlaneColor(elt, eltData);

      return elt;
    },

    /**
     * Draw the plane element as a path
     * @param {Object} elt the plane SVG element - if null a new element will be created and returned
     * @param {JSON} pos the position information as described in the plane data model (i.e. x,y,angle)
     * @return the SVG element
     */
    _drawPlane:function(elt,pos) {
      var drawKey=pos.x+";"+pos.y+";"+pos.angle;

      // check if elements needs to be redrawn
      if (elt!=null && elt.data("drawKey")==drawKey) return elt;

      // element position has changed
      var path="m"+(pos.x-15)+" "+(pos.y-20)+"c20,10 30,15 30,20c0,5 -10,10 -30,20c10,-10 10,-25 10,-20c0,-5 0,-10 -10,-20";
      if (!elt) {
        // create the elt
        elt=this._paper.path(path);
      } else {
        elt.attr("path",path);
      }
      elt.transform("R0");
      elt.rotate(pos.angle+this.angleCorrection,pos.x,pos.y)
         .scale(0.3,0.3,pos.x,pos.y)
         .data("drawKey",drawKey);

      return elt;
    },

    /**
     * Update the SVG plane set
     */
    _updateElt:function(elt,eltData,key,forceRedr) {
      var pos=eltData.positions[eltData.positions.length-1];
      this._drawPlane(elt, pos);
      this._checkPlaneColor(elt,eltData);
      return null;
    },

    /**
     * Update the plane color according to the plane status
     */
    _checkPlaneColor:function(elt,eltData) {
      if (eltData.status=="P") {
        elt.attr({fill:"blue",stroke: "#444"});
      } else {
        elt.attr({fill:"white",stroke:"#444"});
      }
    },

    /**
     * Click callback used on plane paths
     */
    __planeOnClick:function() {
      var elt=this; // elt is the path element
      alert(elt.data("planeId"));
    }
  }
});
