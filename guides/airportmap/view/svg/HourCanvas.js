/**
 * Object in charge of the hour display
 */
Aria.classDefinition({
  $classpath : 'ariadoc.guides.airportmap.view.svg.HourCanvas',
  $dependencies: [
                  'aria.utils.Json',
                  'aria.core.Timer'
                  //TODO add raphael.js
  ],
  /**
   * Constructor
   * @param {JSON} data the module data model
   * @param {JSON} attr the rendering attributes used to display the hour clock
   */
  $constructor : function (data,attr) {
    this._attr={
        containerId:null,
        rectWidth:120,
        rectHeight:22,
        hMargin:10,
        vMargin:10,
        cornerRadius:2
    };
    aria.utils.Json.inject(attr,this._attr,true);

    this._paper=null;
    this._hourSet=null;
   },
  $destructor : function () {
    this._paper=null;
    // TODO cancel timer callback to prevent errors
    this._hourSet.remove();
    this._hourSet.clear();
    this._hourSet=null;
  },
  $prototype : {
    display:function() {
      if (!this._paper) {
        var attr=this._attr;
        var hourDims={
            rectWidth:120,
            rectHeight:22,
            hMargin:10,
            vMargin:10
        };

        this._paper=Raphael(attr.containerId, attr.rectWidth, attr.rectHeight);

        // create hour rectangle
        this._hourSet=this._paper.set();
        this._hourSet.push(
          this._paper
              .rect(0,0,attr.rectWidth,attr.rectHeight,attr.cornerRadius)
              .attr({fill:"#FFFFFF","stroke-width":0})

        );
        this._hourText=this._paper
          .text(Math.floor(attr.rectWidth/2), Math.floor(attr.rectHeight/2)+1, "...")
          .attr({fill:"#555555","font-size":15,"font-weight":"bold"});
        this._hourSet.push(this._hourText);
        this._updateTime();
      }
      return this._paper;
    },

    /**
     * Update the time display in the hour box
     */
    _updateTime:function() {
      var d=new Date();
      var s=d.toLocaleTimeString();
      this._hourText.attr({text:s});

      aria.core.Timer.addCallback({
        fn:this._updateTime,
        scope:this,
        delay:500
      });
    }
  }
});
