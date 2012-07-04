/**
 * Sample widget: a basic slider.
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.widgetlibs.slider.widget.Slider',

	// All widgets must (directly or indirectly) extend the following base class:
	$extends : 'aria.widgetLibs.BaseWidget',

	// The CSS for the slider (defined below) will automatically be loaded in the DOM when instances of this class are
	// created, and will automatically be removed when all instances are disposed
	$css : ['samples.widgets.widgetlibs.slider.widget.SliderCSS'],

	$statics : {
		/**
		 * Error message displayed in the console in case the configuration given to the slider is invalid.
		 * @type String
		 */
		INVALID_CONFIGURATION : "%1Invalid configuration for the slider!",

		/**
		 * Width of the button part of the slider.
		 * @type Number
		 */
		BUTTON_WIDTH : 14
	},
	$dependencies : ['samples.widgets.widgetlibs.slider.widget.SliderCfgBeans', 'aria.utils.Event', 'aria.DomEvent'],

	/**
	 * Create an instance of the slider.
	 * @param {samples.widgetLibs.slider.widget.SliderCfgBeans.SliderCfg} cfg slider configuration, which is the
	 * parameter of the slider in the template
	 * @param {aria.templates.TemplateCtxt} context template context
	 * @param {Number} lineNumber line number in the template
	 */
	$constructor : function (cfg, context, lineNumber) {
		// The BaseWidget constructor automatically stores cfg as this._cfg,
		// context as this._context and lineNumber as this._lineNumber
		this.$BaseWidget.constructor.apply(this, arguments);

		// Check the configuration and add default values:
		var normalizeArg = {
			beanName : "samples.widgets.widgetlibs.slider.widget.SliderCfgBeans.SliderCfg",
			json : this._cfg
		};
		try {
			/**
			 * If true, the configuration was succesfully checked.
			 * @type Boolean
			 */
			this._cfgOk = aria.core.JsonValidator.normalize(normalizeArg, true);
		} catch (e) {
			// Note that the %1 parameter in the error message is automatically replaced by debugging information
			// including the template classpath and line number
			this.$logError(this.INVALID_CONFIGURATION, null, e);
		}

		if (!this._cfgOk) {
			return;
		}

		/**
		 * Maximum value for this._leftPosition, in pixels.
		 * @type Number
		 */
		this._maxLeftPosition = this._cfg.width - this.BUTTON_WIDTH;
		if (this._maxLeftPosition < 10) {
			this._maxLeftPosition = 10;
		}

		// If bindValue is set, register a callback to be called when the bound value changes
		var binding = this._cfg.bindValue;
		if (binding) {
			// This allows to use bindings:
			this._bindingCallback = {
				fn : this._notifyDataChange,
				scope : this
			};
			aria.utils.Json.addListener(binding.inside, binding.to, this._bindingCallback, false);
		}

		/**
		 * Value of the widget (must be between 0 and 1)
		 * @type Number
		 */
		this._value = null;
		this._readValue();

		/**
		 * Distance in pixels between the left side of the slider and the left side of its button.
		 * @type Number
		 */
		this._leftPosition = null;
		this._setLeftPosition(this._value * this._maxLeftPosition);

		/**
		 * Id generated for the button DOM element of the slider.
		 * @type String
		 */
		this._domId = this._createDynamicId();

		/**
		 * Reference to the button DOM element of the slider. It is only defined after the value of the slider is
		 * changed through bindings or if the user interacts with the slider with the mouse (see the _updateDisplay
		 * method).
		 * @type String
		 */
		this._domElt = null;

		/**
		 * Value of the clientX property of the mouse event when the user started dragging the slider (only useful when
		 * _mouseDown is true). It is then updated so that it is always the position of the mouse for which there is no
		 * change of the position of the slider.
		 * @type Number
		 */
		this._savedClientX = null;

		/**
		 * Is true if the mouse is over the slider button, false otherwise.
		 * @type Boolean
		 */
		this._mouseOver = false;

		/**
		 * Is true if the mouse was pressed on the slider button and not yet released, false otherwise.
		 * @type Boolean
		 */
		this._mouseDown = false;

		/**
		 * Id identifying this widget for event delegation (see the documentation on aria.utils.Delegate singleton for
		 * more information).
		 * @type String
		 */
		this._delegateId = aria.utils.Delegate.add({
			fn : this._delegate,
			scope : this
		});

		/**
		 * True if the value has changed between the time the widget is created and the time its markup is inserted in
		 * the DOM.
		 * @type Boolean
		 */
		this._needUpdate = false;
	},
	$destructor : function () {
		// In case the widget is disposed while the user is moving the button of the slider, it is important to remove
		// listeners on the document.body:
		this._detachBodyEvents();

		// Remove the delegate registration:
		if (this._delegateId) {
			aria.utils.Delegate.remove(this._delegateId);
			this._delegateId = null;
		}
		// Remove the callback when the bound value changes
		if (this._bindingCallback) {
			var binding = this._cfg.bindValue;
			aria.utils.Json.removeListener(binding.inside, binding.to, this._bindingCallback, false);
			this._bindingCallback = null;
		}

		// Remove references to DOM elements when disposing to avoid memory leaks:
		this._domElt = null;

		// Call the destructor of the BaseWidget class. This is especially needed to release ids created through
		// _createDynamicId, and unload the CSS if it is no longer needed.
		this.$BaseWidget.$destructor.call(this);
	},
	$prototype : {

		/**
		 * Main widget entry-point, called by the widget library. Write the markup of the slider.
		 * @param {aria.templates.MarkupWriter} out
		 */
		writeMarkup : function (out) {
			if (!this._cfgOk) {
				// configuration was incorrect, do not generate any markup in this case
				return;
			}
			var html = ['<div class="sampleLibSlider" style="width:', this._maxLeftPosition + this.BUTTON_WIDTH,
					'px;"><span class="sliderBegin">&nbsp;</span><span class="sliderEnd">&nbsp;</span><span ',
					aria.utils.Delegate.getMarkup(this._delegateId), ' id="', this._domId,
					'" class="sliderButton" style="left:', this._leftPosition, 'px;">&nbsp;</span></div>'];
			out.write(html.join(''));
		},

		/**
		 * Method called when a DOM event is raised on the button of the slider. This method is registered by the
		 * aria.utils.Delegate.add method in the constructor of the slider.
		 * @param {aria.DomEvent} evt
		 */
		_delegate : function (evt) {
			var method = this['_button_' + evt.type];
			if (method) {
				method.call(this, evt);
				evt.preventDefault();
			}
		},

		/**
		 * Called (by the _delegate method) when the user puts the mouse over the button of the slider.
		 * @param {aria.DomEvent} evt dom event
		 */
		_button_mouseover : function (evt) {
			this._mouseOver = true;
			this._updateDisplay();
		},

		/**
		 * Called (by the _delegate method) when the user puts the mouse out of the button of the slider.
		 * @param {aria.DomEvent} evt dom event
		 */
		_button_mouseout : function (evt) {
			this._mouseOver = false;
			this._updateDisplay();
		},

		/**
		 * Called (by the _delegate method) when the user presses the mouse on the button of the slider.
		 * @param {aria.DomEvent} evt dom event
		 */
		_button_mousedown : function (evt) {
			this._savedClientX = evt.clientX;
			this._attachBodyEvents();
			this._updateDisplay();
		},

		/**
		 * Register _document_mousemove and _document_mouseup for mouse events on the document body, if they are not
		 * already registered.
		 */
		_attachBodyEvents : function () {
			if (!this._mouseDown) {
				this._mouseDown = true;
				var body = Aria.$window.document.body;
				aria.utils.Event.addListener(body, "mousemove", {
					fn : this._document_mousemove,
					scope : this
				}, true);
				aria.utils.Event.addListener(body, "mouseup", {
					fn : this._document_mouseup,
					scope : this
				}, true);
			}
		},

		/**
		 * Unregister _document_mousemove and _document_mouseup for mouse events on the document body, if they are not
		 * already unregistered.
		 */
		_detachBodyEvents : function () {
			if (this._mouseDown) {
				var body = Aria.$window.document.body;
				aria.utils.Event.removeListener(body, "mousemove", {
					fn : this._document_mousemove,
					scope : this
				});
				aria.utils.Event.removeListener(body, "mouseup", {
					fn : this._document_mouseup,
					scope : this
				});
				this._mouseDown = false;
			}
		},

		/**
		 * Called when the user moves the mouse on the page, if this._mouseDown == true.
		 * @param {HTMLEvent} evt HTML mousemove event
		 */
		_document_mousemove : function (evt) {
			// wrap the HTML event in aria.DomEvent for cross-browser compatibility:
			var domEvt = new aria.DomEvent(evt);
			domEvt.stopPropagation(true);
			var diff = domEvt.clientX - this._savedClientX;
			domEvt.$dispose(); // dispose the wrapper
			var oldLeftPosition = this._leftPosition;
			this._setLeftPosition(this._leftPosition + diff);
			this._savedClientX += this._leftPosition - oldLeftPosition;
			this._updateDisplay();
			this._setValue(this._leftPosition / this._maxLeftPosition);
		},

		/**
		 * Called when the user releases a mouse button on the page, if this._mouseDown == true.
		 */
		_document_mouseup : function () {
			this._detachBodyEvents();
			this._updateDisplay();
			this._setValue(this._leftPosition / this._maxLeftPosition);
		},

		/**
		 * Set the position of the button in pixels
		 * @param {Number} newLeftPosition new position
		 */
		_setLeftPosition : function (newLeftPosition) {
			if (newLeftPosition > this._maxLeftPosition) {
				newLeftPosition = this._maxLeftPosition;
			} else if (newLeftPosition < 0) {
				newLeftPosition = 0;
			}
			this._leftPosition = newLeftPosition;
		},

		/**
		 * Set the value of the slider in the data model.
		 * @param {Number} newValue new value
		 */
		_setValue : function (newValue) {
			if (newValue !== this._value) {
				this._value = newValue;
				var binding = this._cfg.bindValue;
				if (binding) {
					aria.utils.Json.setValue(binding.inside, binding.to, newValue);
				}
			}
		},

		/**
		 * Read the bound value in the data model, ensure it is defined, between 0 and 1, and assign the _value
		 * property.
		 */
		_readValue : function () {
			var value = this._value;
			var binding = this._cfg.bindValue;
			if (binding) {
				value = binding.inside[binding.to];
			}
			if (value == null) {
				value = 0;
			}
			if (value < 0) {
				value = 0;
			}
			if (value > 1) {
				value = 1;
			}
			this._value = value;
		},

		/**
		 * Internal method called when the value in the data model changed (this method was registered with addListener
		 * in the constructor of the slider).
		 */
		_notifyDataChange : function () {
			this._readValue();
			this._setLeftPosition(this._value * this._maxLeftPosition);
			this._updateDisplay();
		},

		/**
		 * Uses this._mouseDown, this._mouseOver and this._leftPosition to update the actual display of the slider.
		 */
		_updateDisplay : function () {
			var domElt = this.getButtonDom();
			if (!domElt) {
				// This case may happen if the bound value changed between the time the widget is created and the time
				// its markup is inserted in the DOM
				this._needUpdate = true; // mark that it needs update (it will be updated when the widget is inserted
				// in the DOM, see the initWidget method)
				return;
			}
			var className = "sliderButton";
			if (this._mouseDown) {
				className += " down";
			} else if (this._mouseOver) {
				className += " highlighted";
			}
			if (domElt.className != className) {
				domElt.className = className;
			}
			var leftStyle = this._leftPosition + "px";
			if (domElt.style.left != leftStyle) {
				domElt.style.left = leftStyle;
			}
		},

		/**
		 * Initialization method called after the markup of the widget has been inserted in the DOM. This method calls
		 * _updateDisplay if the value has changed between the time the widget is created and the time its markup is
		 * inserted in the DOM.
		 */
		initWidget : function () {
			if (this._needUpdate) {
				this._updateDisplay();
			}
		},

		/**
		 * Return the DOM element corresponding to the button of the slider.
		 * @return {HTMLElement}
		 */
		getButtonDom : function () {
			var domElt = this._domElt;
			if (domElt == null) {
				domElt = aria.utils.Dom.getElementById(this._domId);
				this._domElt = domElt;
			}
			return domElt;
		},

		/**
		 * Return the DOM element corresponding to the whole slider. This method is used by the Aria Templates inspector
		 * to highlight the widget.
		 * @return {HTMLElement}
		 */
		getDom : function () {
			var domElt = this.getButtonDom();
			return domElt.parentNode;
		}
	}
});