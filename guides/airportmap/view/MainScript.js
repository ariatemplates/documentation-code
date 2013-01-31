Aria.tplScriptDefinition({
  $classpath : 'ariadoc.guides.airportmap.view.MainScript',
  $dependencies: [
     'ariadoc.guides.airportmap.view.svg.MapCanvas',
     'ariadoc.guides.airportmap.view.svg.HourCanvas'
  ],
  $constructor : function () {
    this.paper=null;
    this.uiData={
      W:1000,
      H:750
    };
  },
  $prototype : {

    onModuleEvent:function(evt) {
      if ((evt.name=="methodCallback" || evt.name=="methodCallEnd") && evt.method=="updateData") {
        if (this.mapCanvas) {
          this.mapCanvas.refreshDisplay();
        }
      }
    },

    $viewReady:function() {
      // get the initial data
      this.moduleCtrl.loadData();
    },

    showMap:function(evt) {
      if (this.initialized) return; // otherwise we will create 2 papers (!)
      this.initialized=true;

      var pkg=ariadoc.guides.airportmap.view;

      this.mapCanvas = new pkg.svg.MapCanvas(this.data,{containerId:"mapcanvas"});
      this.hourCanvas = new pkg.svg.HourCanvas(this.data,{containerId:"hourcanvas"});

      this.paper=this.mapCanvas.createMap();
      this.hourCanvas.display();

      /*
      this.paper.circle(50, 50, 3)
                .attr({fill: "red", stroke: "black"})
                .data("name","circle1")
                .click(this._onCircleClick);
      */

    },

    // event handler called when a circle is clicked
    _onCircleClick:function() {
      var elt=this;
      alert(elt.data("name"));
    },

    zoom:function(evt,factor) {
      this.moduleCtrl.zoom(factor);
    }

  }
});