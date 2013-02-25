Aria.classDefinition({
  $classpath : "snippets.custom-widgets.SimpleContainer",
  $extends : "aria.widgetLibs.BaseWidget",
  $dependencies : ["aria.utils.String", "aria.utils.Dom"],

  $constructor : function (cfg, ctxt, lineNumber) {
    this.$BaseWidget.constructor.apply(this, arguments);

    /**
     * Id of the main DOM element of this widget.
     * @type String
     */
    this._id = this._createDynamicId(); // This line creates a dynamic id to be used in the HTML markup.
    // Ids are automatically released when the widget is disposed (so that they can be reused)
    // Alternatively, it is possible to release an id manually with this._releaseDynamicId(this._id).

    /**
     * Reference of the DOM element with id this._id.
     * @type HTMLElement
     */
    this._domElt = null;
  },
  $prototype : {
    /**
     * Main widget entry-point. Write the beginning of the widget markup, corresponding to the opening tag (for a
     * container widget).
     * @param {aria.templates.MarkupWriter} out
     */
    writeMarkupBegin : function (out) {
      var html = ['<div id="', this._id, '"><div class="customLibTitle">',
        aria.utils.String.escapeHTML(this._cfg.title), '</div>'];
      out.write(html.join(''));
    },

    /**
     * Write the end of the widget markup, corresponding to the closing tag (for a container widget).
     * @param {aria.templates.MarkupWriter} out
     */
    writeMarkupEnd : function (out) {
      out.write('</div>');
    },

    /**
     * Initialization method called after the markup of the widget has been inserted in the DOM.
     */
    initWidget : function () {
      // now that the markup has been inserted in the DOM, it is possible to access
      // the HTML element corresponding to the id:
      this._domElt = aria.utils.Dom.getElementById(this._id);
      // and do what is needed with it...
    }
  }
});