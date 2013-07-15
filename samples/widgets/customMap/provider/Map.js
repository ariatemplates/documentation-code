/**
 * Map implementation
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.customMap.provider.Map',
	$dependencies : ['samples.widgets.customMap.provider.MarkerGroup',
			'samples.widgets.customMap.provider.Marker',
			'samples.widgets.customMap.provider.MapBeans', 'aria.utils.Type'],
	$constructor : function (dom, cfg) {

		/**
		 * Configuration object
		 * @type Object
		 * @private
		 */
		this._cfg = cfg;
		if (!this._normalizeCfg(cfg)) {
			return;
		}

		/**
		 * @type Object
		 */
		this.markerGroups = {};

		/**
		 * @type Object
		 */
		this.markers = {};

		/**
		 * map containing the shapes
		 * @type Array
		 */
		this.shapes = [];

		/**
		 * map containing the tags
		 * @type Array
		 */
		this.tags = [];

		/**
		 * Conversion table to microsoft values
		 * @type Object
		 * @private
		 */
		this._mapTypes = {
			"road" : Microsoft.Maps.MapTypeId.road,
			"satellite" : Microsoft.Maps.MapTypeId.aerial,
			"hybrid" : Microsoft.Maps.MapTypeId.aerial,
			"physical" : Microsoft.Maps.MapTypeId.aerial,
			"all" : Microsoft.Maps.MapTypeId.auto
		};

		this._counter = 0;

		this._mouseWheelHandler = null;

		/**
		 * @type Microsoft.Maps.Map
		 * @private
		 */
		var _msMap = null;

		/**
		 * Returned by the Microsoft.Maps.Events utility
		 * @type Object
		 * @private
		 */
		var _mouseWheelHandler = null;

		this.enableScrollWheelZoom = function (enable) {
			var map = _msMap, eventUtil = Microsoft.Maps.Events;
			if (!enable) {
				if (!_mouseWheelHandler)
					_mouseWheelHandler = eventUtil.addHandler(map, 'mousewheel', function (evt) {
						evt.handled = true;
					});
			} else {
				if (_mouseWheelHandler) {
					eventUtil.removeHandler(_mouseWheelHandler);
					_mouseWheelHandler = null;
				}
			}
		};

		this._setMicrosoftMap = function (dom) {
			var cfg = this._cfg;
			var mapOptions = this._getMapOptionsFromCfg(cfg);
			_msMap = new Microsoft.Maps.Map(dom, mapOptions);
			this.enableScrollWheelZoom(cfg.scrollWheelZoom);
		};

		this._setMicrosoftMap(dom);

		this._nullifyDom = function () {
			dom = null;
		};

		this.getLatLong = function () {
			return _msMap.getCenter();
		};

		this.setLatLong = function (latitude, longitude) {
			_msMap.setView({
				center : new Microsoft.Maps.Location(latitude, longitude)
			});
		};

		this.getZoom = function () {
			return _msMap.getZoom();
		};

		this.setZoom = function (zoomLevel) {
			_msMap.setView({
				zoom : zoomLevel
			});
		};

		this.setMapType = function (mapType) {
			_msMap.setMapType(this._mapTypes[mapType]);
		};

		this.addMarker = function (lat, lon, label, indexed, index, groupName, centerOnMarker, name) {
			if (!name) {
				name = "marker" + this._counter;
				this._counter++;
			}
			var hasValidGroup = this.hasGroup(groupName);
			var markerCfg = {
				lat : lat,
				lon : lon,
				label : label,
				indexed : indexed,
				index : index,
				markerType : (hasValidGroup) ? this.markerGroups[groupName].getMarkerType() : null,
				name : name
			};
			var marker = new samples.widgets.customMap.provider.Marker(markerCfg, _msMap);
			marker.addToMap();
			if (centerOnMarker) {
				this.setLatLong(lat, lon);
			}
			this.markers[name] = marker;
			if (hasValidGroup) {
				this.markerGroups[groupName].addMarker(marker, name);
			}
			return name;
		};

		this.centerOnAll = function () {
			var locations = [];
			var entities = _msMap.entities, entity;
			var entCount = entities.getLength();
			for (var i = 0; i < entCount; i++) {
				entity = entities.get(i);
				if (entity.getLocation) {
					locations.push(entity.getLocation());
				}
				if (entity.getLocations) {
					locations = locations.concat(entity.getLocations());
				}
			}
			var bounds = Aria.$window.Microsoft.Maps.LocationRect.fromLocations(locations);
			_msMap.setView({
				bounds : bounds
			});

		};

		this.resize = function (width, height) {
			var typeUtil = aria.utils.Type
			var widthNumber = (typeUtil.isNumber(width)) ? width : parseInt(width, 10);
			var heightNumber = (typeUtil.isNumber(height)) ? height : parseInt(height, 10);
			_msMap.setOptions({
				width : widthNumber,
				height : heightNumber
			});
		};

		this.disposeMap = function () {
			_msMap.dispose()
			_msMap = null;
		};

	},
	$destructor : function () {
		this._cfg = null;
		this._mapTypes = null;
		for (var markerGroup in this.markerGroups) {
			if (this.markerGroups.hasOwnProperty(markerGroup)) {
				this.markerGroups[markerGroup].$dispose();
			}
		}
		this.markerGroups = null;
		for (var marker in this.markers) {
			if (this.markers.hasOwnProperty(marker)) {
				this.markers[marker].$dispose();
			}
		}
		this.markers = null;
		this._nullifyDom();

	},
	$statics : {
		INVALID_CONFIGURATION : "Invalid configuration for custom map: %1",
		CREDENTIALS : ""
	},
	$prototype : {

		/**
		 * @param {samples.widgets.customMap.provider.MapBeans.Map} cfg
		 * @return {Boolean}
		 * @private
		 */
		_normalizeCfg : function (cfg) {
			var cfgOk = false
			try {
				cfgOk = aria.core.JsonValidator.normalize({
					json : cfg,
					beanName : "samples.widgets.customMap.provider.MapBeans.Map"
				}, true);
			} catch (e) {
				var logs = aria.core.Log;
				if (logs) {
					var error, message = [];
					for (var index = 0, len = e.errors.length; index < len; index += 1) {
						error = e.errors[index];
						message.push(logs.prepareLoggedMessage(error.msgId, error.msgArgs));
					}
					this.$logError(this.INVALID_CONFIGURATION, message.join("\n"));
				}
			}
			return cfgOk;
		},

		/**
		 * Create an instance of the Microsoft Map
		 * @param {HTMLElement} dom
		 */
		_setMicrosoftMap : function (dom) {},

		enableScrollWheelZoom : function (enable) {},
		/**
		 * @param {samples.widgets.customMap.provider.MapBeans.Map} cfg
		 * @return {Object} Map options accepted by the Microsoft Map API
		 */
		_getMapOptionsFromCfg : function (cfg) {
			var mapOptions = {
				credentials : this.CREDENTIALS,
				customizeOverlays : true,
				enableClickableLogo : false,
				enableSearchLogo : false,
				showDashboard : cfg.controls,
				showMapTypeSelector : cfg.mapChooser,
				zoom : cfg.zoomLevel,
				center : new Microsoft.Maps.Location(cfg.latitude, cfg.longitude),
				mapTypeId : this._mapTypes[cfg.mapType]
			};

			if (cfg.mapType == "satellite" || cfg.mapType == "physical") {
				mapOptions.labelOverlay = Microsoft.Maps.LabelOverlay.hidden;
			}

			this.addMarkerGroups(cfg.markerGroups);
			return mapOptions;

		},
		addMarkerGroups : function (markerGroups) {
			var group;
			for (var i = 0, groupsNb = markerGroups.length; i < groupsNb; i++) {
				group = markerGroups[i];
				this.markerGroups[group.name] = new samples.widgets.customMap.provider.MarkerGroup(group);
			}

		},

		getLatLong : function () {},

		setLatLong : function (latitude, longitude) {},

		getZoom : function () {},

		setZoom : function (zoomLevel) {},

		setMapType : function (mapType) {},

		addMarker : function (lat, lon, label, indexed, index, groupName, centerOnMarker, name) {},

		init : function () {},

		removeMarker : function () {},

		centerOnAll : function () {},

		changeMarkerGroup : function () {},

		hideGroup : function (groupName) {
			if (this.hasGroup(groupName)) {
				this.markerGroups[groupName].hide();
			}
		},

		showGroup : function (groupName) {
			if (this.hasGroup(groupName)) {
				this.markerGroups[groupName].show();
			}
		},

		setScaleUnit : function () {},

		hasGroup : function (groupName) {
			return !!(groupName && this.markerGroups[groupName]);
		},

		resize : function (width, height) {},
		enableClustering : function () {},
		disableClustering : function () {},
		disposeMap : function () {},
		nullifyDom : function () {}
	}
});
