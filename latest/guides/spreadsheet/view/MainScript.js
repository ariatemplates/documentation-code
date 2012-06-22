Aria.tplScriptDefinition({
  $classpath : 'ariadoc.guides.spreadsheet.view.MainScript',
  $constructor : function () {

  },
  $prototype : {

    onModuleEvent:function(evt) {
    return;
      if (evt.name=="methodCallBack") {alert(123);}
      if (evt.name=="methodCallEnd") {
        if (evt.method=="xloadDataset"
            || evt.method=="createNewDataset"
            || evt.method=="copyDataset"
            || evt.method=="selectDataset") {
          this.$refresh();

          //this.$refresh({
          //  filterSection: "mainLayout",
          //  macro: {name: "mainLayout",args:[]}
          //});
        }
      }
    },

    /**
     * Event Handler called when a scrollbar is used
     * Will change the content scroll and synchronize all scrollbars
     */
    onScroll: function(evt,id) {
      if (id=="vscroll") {
        // vertical scroll
        var vs=this.$getElementById("vscroll");
        if (vs) {
          var sTop=vs.getScroll().scrollTop;
          vs.$dispose();

          var arr=["dataCont_fixedColumns_data","dataCont_scrollableColumns_data"];
          for (sid in arr) {
            div=this.$getElementById(arr[sid]);
            if (div) {
              div.setScroll({scrollTop:sTop});
              div.$dispose();
            }
          }
        }
      } else {
        // horizontal scroll
        var hIdA=id, hIdB=(id=="hscroll1")? "hscroll2":"hscroll1";
        var hA=this.$getElementById(hIdA), div;
        if (hA) {
          var sLeft=hA.getScroll().scrollLeft;
          hA.$dispose();
          var arr=["dataCont_scrollableColumns_data","dataCont_scrollableColumns_filter",hIdB];
          for (sid in arr) {
            div=this.$getElementById(arr[sid]);
            if (div) {
              div.setScroll({scrollLeft:sLeft});
              div.$dispose();
            }
          }
        }
      }
    },

    /**
     * Event Handler called when a data cell is clicked
     */
    onDsDataCellClick:function(evt) {
      var id=evt.target.getExpando("id",true);
      if (id=="TABLE") return; // event did not hapen in a cell

      var colId=evt.target.getExpando("colId",true);
      //alert(id+"/"+colId);
      this.moduleCtrl.editCell(parseInt(id,10),colId);
    },

    /**
     * Return the bindRefreshTo value for each data table row section
     * @param {Object} itm the item passed as argument of each Repeater childSection callback
     * cf. Repeater documentation
     */
    getRowBindRefresh:function(itm) {
      var item=itm.item;
      return [{to:"editMode", inside:item}];
    },

    /**
     * Event Handler called when a link/tab is clicked to change the current dataset
     * @param {Integer} idx the dataset index that should become the current one
     */
    selectDataset:function(evt,idx) {
      this.moduleCtrl.selectDataset(idx);
    }
  }
});