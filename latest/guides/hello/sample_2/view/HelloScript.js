Aria.tplScriptDefinition({
  $classpath : 'ariadoc.guides.hello.sample_2.view.HelloScript',
  $dependencies: ['aria.utils.Json'],
  $constructor : function () {},
  $prototype : {

    getRepeaterSectionBinding:function(repItem) {
      var person=repItem.item;
      return [{to:"data:detailsVisible", inside:person}];
    },

    toggleDetailDisplay:function(evt,args) {
      var person=args;
      var detailsVisible=(person["data:detailsVisible"]==true);
      aria.utils.Json.setValue(person,"data:detailsVisible",!detailsVisible);
    }

  }
});

