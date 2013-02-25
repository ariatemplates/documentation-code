Aria.classDefinition({
  $classpath: "snippets.custom-widgets.SimpleElement",
  $extends: "aria.html.Element",

  /*
    Widget configuration
    ////#widgetConfiguration
    {
      tag: "div",
      attributes : {
        style : "display : inline",
        classList : ["container", "left"]
      }
    }
    ////#widgetConfiguration

    ////#widgetConfigurationResult
    <div class="container left" style="display : inline"></div>
    ////#widgetConfigurationResult
  */


  ////#constructor
  /**
   * Create an instance of the widget.
   * @param {Object} cfg widget configuration, which is the parameter given in the template
   * @param {aria.templates.TemplateCtxt} context template context
   * @param {Number} lineNumber line number in the template
   */
  $constructor : function (cfg, ctxt, lineNumber) {
  ////#constructor
  },
  $prototype: {

  }
});