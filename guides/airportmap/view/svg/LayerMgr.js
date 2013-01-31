/**
 * Base class to manage each layer
 * Contains all common methods to show/hide/update layers
 * Layer objects display should be managed in sub-classes (e.g. FlightsLayer)
 */
Aria.classDefinition({
  $classpath : 'ariadoc.guides.airportmap.view.svg.LayerMgr',
  /**
   * Constructor
   */
  $constructor : function (paper,layerData) {
    this._paper=paper;
    this._data=layerData;
    this._visible=true;
    this._elts=[];
    this._eltsMap={};
   },
  $destructor : function () {
     this._paper=null;
     this._data=null;
     this._elts=null; // paper clear should be done by caller
     this._eltsMap=null;
  },
  $prototype : {

    /**
     * Re-synchronize the SVG objects with the data model
     */
    refresh:function() {
      if (!this._data.visible) {
        if (this._visible) this._hideElements();
      } else {
        // objects are visible
        var wasInvisible=(!this._visible);
        this._visible=true;

        // go through all elts in the data model
        var itm, elt;
        for (key in this._data.items) {
          itm=this._data.items[key];
          elt=this._eltsMap[key];
          if (!elt) {
            // elt has not been created yet
            elt=this._createElt(itm,key);
            if (elt) {
              this._eltsMap[key]=elt;
              this._elts.push(elt);
            }
          } else {
            this._updateElt(elt,itm,key);
            if (wasInvisible) elt.show();
          }

          // TODO detect elements that are in the map but not in the data model anymore and delete them
        }
      }
    },

    attr:function(att) {
      for (var i=0, sz=this._elts.length;sz>i;i++) {
        //this._elts[i].attr(att);
        this._elts[i].attr(att);
      }
    },

    translate:function(x,y) {
      for (var i=0, sz=this._elts.length;sz>i;i++) {
        //this._elts[i].attr(att);
        this._elts[i].translate(x,y);
      }
    },

    transform:function(t) {
      for (var i=0, sz=this._elts.length;sz>i;i++) {
        this._elts[i].transform(t);
      }
    },

    /**
     * [Abstract method that should be overridden by sub-classes]
     * This method creates the SVG element (or set) that corresponds to the
     * data passed as argument
     * @return the SVG element (cf. Raphael library) or null if nothing is to be created
     */
    _createElt:function(eltData,key) {
      return null;
    },

    /**
     * [Abstract method that should be overridden by sub-classes]
     * Update the SVG element (or set) with the new values of the data model
     */
    _updateElt:function(elt,eltData,key) {
      return null;
    },

    /**
     * Hide all the SVG layer elements that have already been created
     */
    _hideElements:function() {
      for (var i=0, sz=this._elts.length;sz>i;i++) {
        this._elts[i].hide();
      }
      this._visible=false;
    }

  }
});
