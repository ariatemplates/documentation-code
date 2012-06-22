Aria.tplScriptDefinition({
  $classpath : 'ariadoc.guides.treeview.view.MainScript',
  $dependencies: ['aria.utils.Json'],
  $constructor : function () {

  },
  $prototype : {
    loadData:function(evt) {
      this.moduleCtrl.loadData("some param");
    },

    toggleMenu:function(evt,args) {
      var mnu=args;
      var expanded=(mnu["data:expanded"]==true);
      aria.utils.Json.setValue(mnu,"data:expanded",!expanded);
    }
  }
});