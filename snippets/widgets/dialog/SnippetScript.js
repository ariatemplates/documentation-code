Aria.tplScriptdefinition({
  $classpath: 'snippets.widgets.dialog.SnippetScript',
  $constructor: function() {
    ///#setEnvironment
    aria.core.AppEnvironment.setEnvironment({
      'widgetSettings' : {
        'dialog' : {
          movable : true,
          movableProxy : {
            type : "Overlay"
          }
        }
      }
    });
    ///#setEnvironment
  },
  $prototype: {

  }
});