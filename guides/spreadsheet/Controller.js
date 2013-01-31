Aria.classDefinition({
	$classpath : 'ariadoc.guides.spreadsheet.Controller',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['ariadoc.guides.spreadsheet.ControllerInterface'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);

    // add test filter for response mocks
    aria.core.IOFiltersMgr.addFilter('ariadoc.guides.spreadsheet.mocks.TestMsgHandler');

		this._data = {
      currentDs:null,   // current dataset - cf. createNewDataset for the structure
      datasets:[]     // list of loaded datasets
		};
	},
	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},
	$prototype : {
		$publicInterfaceName : 'ariadoc.guides.spreadsheet.ControllerInterface',

    /**
     * Copy the current dataset into a new dataset
     * and set is as current dataset
     */
    copyDataset:function() {
      if (!this._data.currentDs) return;
      var ds=this.json.copy(this._data.currentDs,true);
      // change name
      nm=ds.name.replace(/\(.*\)$/,'');
      ds.name=nm+"("+this._data.datasets.length+")";

      // add dataset to the list and select it
      this.json.add(this._data.datasets,ds);
      this.json.setValue(this._data,"currentDs",ds);
    },

    /**
     * Create a new dataset and add it to the dataset list (but will not be selected by default)
     * @param {String} nm the dataset name
     * @param (Boolean} createData tells if columns and empty data should be created - default=true
     * @param (Boolean} setAsCurrentDataset tells if the new dataset should be assigned to the currentDs reference - default=true
     * @return the new dataset
     */
    createNewDataset:function(nm,createData,setAsCurrentDataset) {
      if (typeof(nm)!='string') nm="New "+this._data.datasets.length;
      if (typeof(createData)!='boolean') createData=true;
      if (typeof(setAsCurrentDataset)!='boolean') setAsCurrentDataset=true;

      var ds={
        name:nm,
        fixedColumns:[],
        scrollableColumns:[],
        items:[]
      }

      this.json.add(this._data.datasets,ds);

      if (createData) {
        // create Columns
        var nbrOfColumns=20, nbrOfFixedColumns=3, nbrOfLines=100;
        var colIds=[], d, colId;
        for (var i=0;nbrOfColumns>i;i++) {
          colId="c"+i;
          colIds.push(colId);
          d={
            colId:colId,
            title:"Col "+i,
            width:90
          }
          if (i<nbrOfFixedColumns) ds.fixedColumns.push(d);
          else ds.scrollableColumns.push(d);
        }

        // create lines
        for (var i=0;nbrOfLines>i;i++) {
          d={editMode:false};
          for (var j=0, maxJ=colIds.length;maxJ>j;j++) {
            d[colIds[j]]={
              id:i,
              value: "", //+i+":"+j,
              editMode:false
            };
          }
          ds.items.push(d);
        }
      }

      if (setAsCurrentDataset) this.json.setValue(this._data,"currentDs",ds);
      return ds;
    },

    /**
     * Load a dataset in the data model
     * The dataset will be retrieved from a server call
     * @param {String} ref the data file path
     * @param {aria.core.JsObject.Callback} cb callback
     */
		loadDataset : function (ref,cb) {
       var requestData = {datasetRef:ref};
       this.submitJsonRequest("getDataset", requestData, {
        fn : "_loadDataset",
        scope : this,
        args : cb
      });
		},

    /**
     * loadDataset callback - called when server response is received
     * @param {Object} res the return value of submitJsonrequest
     * @param {Callback} args the callback arcugment passed by loadDataset
     */
    _loadDataset: function (res, args) {
      var cb=args;
      if (res.error) {
        this.$callback(cb);
        return;
      }
      //var ds = this.json.load(res.data, this);
	  var ds = res.response;
      // modify the cell values to use a structure instead of a string
      var item, tmp;
      for (var i=0, iMax=ds.items.length;iMax>i;i++) {
        item=ds.items[i];
        for (var k in item) {
          if (k=="id") continue;
          tmp=item[k];
          item[k]={
            id:i,
            value:tmp
          }
        }
      }

      // add dataset to the list and select it
      this.json.add(this._data.datasets,ds);
      this.json.setValue(this._data,"currentDs",ds);
      this.$callback(cb);
    },

    /**
     * Set a cell and its associated row to editable mode
     * @param {Integer} itemId line id
     * @param {String} colId column id
     */
    editCell : function (itemId,colId) {
      // set the cell in edit mode

      // itemId is not necessarily the index in the array
      var ds=this._data.currentDs;
      var cols=ds.fixedColumns.concat(ds.scrollableColumns);
      var items=ds.items, itm, tmpId;
      for (var i=0, iMax=items.length;iMax>i;i++) {
        itm=items[i];
        if (itm[colId].id==itemId) {
          if (!itm.editMode) {
            // set all editValues (used to not change the value until save is called
            for (var k in cols) {
              tmpId=cols[k].colId;
              this.json.setValue(itm[tmpId],"editMode",true);
              this.json.setValue(itm[tmpId],"editValue",itm[tmpId].value);
            }
            //this.json.setValue(itm[colId],"hasFocus",true);
            this.json.setValue(itm,"editMode",true);
          }
          break;
        }
      }
    },

    /**
     * Save the changes made in the current dataset
     */
    saveChanges: function () {
      var ds=this._data.currentDs;
      var cols=ds.fixedColumns.concat(ds.scrollableColumns);
      var items=ds.items, itm, colId;
      for (var i=0, iMax=items.length;iMax>i;i++) {
        itm=items[i];
        if (itm.editMode) {
          for (var k in cols) {
            colId=cols[k].colId;
            this.json.setValue(itm[colId],"editMode",false);
            this.json.setValue(itm[colId],"value",itm[colId].editValue);
          }
          this.json.setValue(itm,"editMode",false);
        }
      }
      // TODO submit changes
    },

    /**
     * Cancel the changes made in the current dataset
     */
    cancelChanges: function () {
      var ds=this._data.currentDs;
      var cols=ds.fixedColumns.concat(ds.scrollableColumns);
      var items=ds.items, itm, colId;
      for (var i=0, iMax=items.length;iMax>i;i++) {
        itm=items[i];
        if (itm.editMode) {
          for (var k in cols) {
            colId=cols[k].colId;
            this.json.setValue(itm[colId],"editMode",false);
          }
          this.json.setValue(itm,"editMode",false);
        }
      }
      // TODO submit changes
    },

    /**
     * Set a dataset as current dataset - i.e. referenced by 'currentDs'
     * in the data model
     * @param {Integer} dsIdx the dataset index in the datasets array
     */
    selectDataset : function (dsIdx) {
      if (dsIdx>-1 && this._data.datasets.length>dsIdx) {
        this.json.setValue(this._data,"currentDs",this._data.datasets[dsIdx]);
      }
    }
	}
});
