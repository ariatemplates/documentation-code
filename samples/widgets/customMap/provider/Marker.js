/**
 * Wrapper for Microsoft marker
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.customMap.provider.Marker',
	$constructor : function (cfg, map) {

		var msMarkerOptions = this._getMsMarkerOptionsFromCfg(cfg)
		var location = new Microsoft.Maps.Location(cfg.lat, cfg.lon);

		/**
		 * @type Microsoft.Maps.Pushpin
		 * @private
		 */
		var _msMarker = new Microsoft.Maps.Pushpin(location, msMarkerOptions);

		this._createInfoBox = function (location, htmlContent) {
			var infoBox = new Microsoft.Maps.Infobox(location, {
				title : null,
				htmlContent : htmlContent,
				visible : false,
				offset : new Microsoft.Maps.Point(0, 15)
			});

			var eventUtil = Microsoft.Maps.Events;
			this._mouseOverHandler = eventUtil.addHandler(_msMarker, 'mouseover', function () {
				infoBox.setOptions({
					visible : true
				});
			});
			this._mouseOutHandler = eventUtil.addHandler(_msMarker, 'mouseout', function () {
				infoBox.setOptions({
					visible : false
				});
			});
			return infoBox;
		};

		/**
		 * @type Microsoft.Maps.Infobox
		 * @private
		 */
		var _infoBox = null;
		if (cfg.label) {
			_infoBox = this._createInfoBox(location, cfg.label);
		}

		this.show = function () {
			_msMarker.setOptions({
				visible : true
			});
		};

		this.hide = function () {
			_msMarker.setOptions({
				visible : false
			});
		};

		this.addToMap = function () {
			map.entities.push(_msMarker);
			if (cfg.label) {
				map.entities.push(_infoBox);
			}
		};

		this.removeFromMap = function () {
			if (cfg.label) {
				var eventUtil = Microsoft.Maps.Events;
				eventUtil.removeHandler(this._mouseOverHandler);
				eventUtil.removeHandler(this._mouseOutHandler);
				map.entities.remove(_infoBox);
			}
			map.entities.remove(_msMarker)
		}

	},
	$destructor : function () {
		this.removeFromMap();
		this._cfg = null;
	},
	$statics : {},
	$prototype : {

		show : function () {},
		hide : function () {},
		addToMap : function () {},
		removeFromMap : function () {},
		_createInfoBox : function (location, htmlContent) {},

		_getMsMarkerOptionsFromCfg : function (cfg) {
			var className = (cfg.markerType) ? "x" + cfg.markerType : "";
			var msMarkerOptions = {
				text : cfg.index,
				typeName : "xMapMarker " + className,
				icon : "",
				width : 25,
				height : 28
			};
			return msMarkerOptions;

		}

	}
});
