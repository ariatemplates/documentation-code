Aria.tplScriptDefinition({
  $classpath: "snippets.templates.keyboard_nav.KeyboardNavScript",
  $prototype: {
    addGlobalListeners: function() {
      aria.templates.NavigationManager.addGlobalKeyMap(
      ////#keyMapSyntax
      {
        key : "F4",
        shift : true,
        callback : {
          fn : "destroyTheWorld",
          scope : this
        }
      }
      ////#keyMapSyntax
      );
    },

    removeGlobalListener: function() {
      ////#removeGlobal
      aria.templates.NavigationManager.removeGlobalKeyMap({
        key : "F4"
      });
      ////#removeGlobal
    },
    destroyTheWorld: function(evt) {

    }
  }
});