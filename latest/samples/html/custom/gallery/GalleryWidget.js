Aria.classDefinition({
	$classpath : "samples.html.custom.gallery.GalleryWidget",
	$extends : "aria.html.Element",
	$statics : {
		SELF_CLOSING_ONLY : "Gallery Widget can only be used as a self closing widget.",
		ROOT : "samples/html/gallery/"
	},
	$css : ["samples.html.custom.gallery.GalleryWidgetStyle"],
	$constructor : function (cfg, ctxt, lineNumber) {
		cfg.tagName = "div";

		this.$Element.constructor.call(this, cfg, ctxt, lineNumber);

		/**
		 * List of images
		 * @type Array
		 */
		this.images = cfg.images;

		/**
		 * Index of the visible image
		 * @type Number
		 */
		this.visible = cfg.visible || 0;

		/**
		 * DOM reference of the description
		 * @type HTMLElement
		 */
		this._domDesc = null;
	},
	$destructor : function () {
		this._domDesc = null;

		this.$Element.$destructor.call(this);
	},
	$prototype : {
		/**
		 * Write the markup, corresponding to the self closing tag of this element.
		 * @param {aria.templates.MarkupWriter} out
		 */
		writeMarkup : function (out) {
			var visible = this.images[this.visible];

			out.write("<div class='wGalleryContainer'>");
			out.write("<img id='" + this._id + "' src='" + this.ROOT + visible.url + "' />");
			out.write("<div class='wGalleryDescription' id='" + this._id + "_desc'>" + visible.desc + "</div>");
			out.write("</div>");
		},

		/**
		 * Write the beginning of its markup, corresponding to the opening tag of this element.
		 * @param {aria.templates.MarkupWriter} out
		 */
		writeMarkupBegin : function (out) {
			this.$logError(this.SELF_CLOSING_ONLY);
		},

		/**
		 * Write the end of its markup, corresponding to the closing tag of this emelent.
		 * @param {aria.templates.MarkupWriter} out
		 */
		writeMarkupEnd : Aria.empty,

		/**
		 * Initialization method called after the markup of the widget has been inserted in the DOM.
		 */
		initWidget : function () {
			// the parent initWidget does a getElementBy id of _id on _domElt (which is the image)
			this.$Element.initWidget.call(this);

			this._domDesc = aria.utils.Dom.getElementById(this._id + "_desc");
		},

		/**
		 * Function called when a value inside 'bind' has changed.
		 * @param {String} name Name of the property
		 * @param {Object} value Value of the changed property
		 * @param {Object} oldValue Value of the property before the change happened
		 */
		onbind : function (name, newValue) {
			if (name == "visible") {
				this.visible = newValue;

				var visible = this.images[this.visible];

				this._domElt.src = this.ROOT + visible.url;
				this._domDesc.innerHTML = visible.desc;
			}
		}
	}
})