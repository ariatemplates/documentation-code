Aria.classDefinition({
  $classpath : "snippets.custom-widgets.MyCustomWidgetsLib",
  $extends : "aria.widgetLibs.WidgetLib",
  $singleton : true,
  $prototype : {
    widgets : {
      "Element": "snippets.custom-widgets.SimpleElement",
      "Label" : "snippets.custom-widgets.SimpleLabel",
      "Container" : "snippets.custom-widgets.SimpleContainer"
    }
  }
});