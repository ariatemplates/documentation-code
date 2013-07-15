/**
 * Group of markers
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.customMap.provider.MarkerGroup',
	$constructor : function (cfg) {
		/**
		 * @type modules.shopper.common.js.map.MapBeans.MarkerGroupCfg
		 */
		this._cfg = cfg;

		this.markers = {};

		this._isHidden = false;

	},
	$destructor : function () {
		this._cfg = null;
	},
	$statics : {},
	$prototype : {
		addMarker : function (marker, name) {
			this.markers[name] = marker;
			if (this._isHidden) {
				marker.hide();
			}
		},
		getMarker : function (name, pop) {
			var marker = this.markers[name];
			if (marker == null) {
				return null;
			}
			if (pop === true) {
				delete(this.markers[name]);
			}
			return marker;
		},

		getMarkerType : function () {
			return this._cfg.markerType;
		},

		show : function () {
			var markers = this.markers;
			for (var marker in markers) {
				if (markers.hasOwnProperty(marker))
					markers[marker].show();
			}
			this._isHidden = false;
		},
		hide : function () {
			var markers = this.markers;
			for (var marker in markers) {
				if (markers.hasOwnProperty(marker))
					markers[marker].hide();
			}
			this._isHidden = true;
		}

	}
});
