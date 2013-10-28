Aria.classDefinition({
    $classpath : "snippets.custom-widgets.SimpleLabel",
    $extends : "aria.widgetLibs.BaseWidget",
    $dependencies : ["aria.utils.String"],
    ////#constructor
    $constructor : function (cfg, ctxt, lineNumber) {
        // The parent constructor takes care of storing the config in this._cfg, the template context in this._context
        // and the line number in this._lineNumber
        this.$BaseWidget.constructor.apply(this, arguments);
        // ...
    },
    ////#constructor
    $prototype : {
        /**
          Main widget entry-point. Write the widget markup for a non-container widget.
          @param {aria.templates.MarkupWriter} out
        */
        writeMarkup : function (out) {
            var cfg = this._cfg;
            if (cfg.content) {
                out.write(aria.utils.String.escapeHTML(this._cfg.content));
            }
            if (cfg.macro) {
                // it is possible to call a macro when generating the widget markup
                out.callMacro(cfg.macro);
            }
        }
    }
});