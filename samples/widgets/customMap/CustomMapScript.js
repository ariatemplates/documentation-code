Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.customMap.CustomMapScript',
	$dependencies : ["aria.map.MapManager", "aria.utils.Rand"],
	$constructor : function () {
		var mapMgr = aria.map.MapManager;
		this.mapMgr = mapMgr;
		this.myMap = this.mapMgr.getMap("myMap");
		if (!(mapMgr.hasProvider("custom"))) {
			mapMgr.addProvider("custom", "samples.widgets.customMap.provider.CustomProvider")
		}
		mapMgr.$on({
			"mapReady" : this._onMapReady,
			scope : this
		});

	},
	$prototype : {

		$dataReady : function () {

			if (!this.data.counters) {
				this.data.counters = {
					green : 1,
					blue : 1
				};
				this.data.markers = {
					green : [],
					blue : []
				};
				this.data.markerGroups = {
					green : {
						visible : true
					},
					blue : {
						visible : true
					}
				};
			}

		},
		_onMapReady : function (args) {
			if (args.mapId == "myMap") {
				this.myMap = this.mapMgr.getMap("myMap");
			}
		},
		addMarker : function (evt, groupName) {
			var position = this._computeRandomPosition();
			var map = this.myMap;
			var id = groupName + '_' + this.data.counters[groupName];
			this.$json.add(this.data.markers[groupName], {
				id : id,
				position : position,
				visible : this.data.markerGroups[groupName].visible
			});
			map.addMarker(position.latitude, position.longitude, this._getMarkerInfo(groupName), null, this.data.counters[groupName]
					+ "", groupName, true, id);
			this.data.counters[groupName]++;
		},

		_getMarkerInfo : function (groupName) {
			return '<div style="width: 50px; height: 20px; background-color: white;padding: 5px;">' + groupName + ' '
					+ this.data.counters[groupName] + '</div>';
		},
		centerOnAll : function () {
			this.myMap.centerOnAll()
		},

		_computeRandomPosition : function () {
			var xMin = 40.32063521337917;
			var xMax = 40.45243402312037;
			var yMin = -3.828740837527662;
			var yMax = -3.5341699146760996;
			var xRandomNumber = aria.utils.Rand.rand01();
			var yRandomNumber = aria.utils.Rand.rand01();
			return {
				latitude : xMin + (xMax - xMin) * xRandomNumber,
				longitude : yMin + (yMax - yMin) * yRandomNumber
			};
		},

		toggleGroupVisibility : function (_, groupName) {
			var visible = this.data.markerGroups[groupName].visible;
			if (visible) {
				this.myMap.showGroup(groupName);
			} else {
				this.myMap.hideGroup(groupName);
			}
			var markers = this.data.markers[groupName];
			for (var i = 0, length = markers.length; i < length; i++) {
				this.$json.setValue(markers[i], "visible", visible);
			}

		},
		toggleMarkerVisibility : function (_, item) {
			var visible = item.visible;
			var marker = this.myMap.markers[item.id];
			if (visible) {
				marker.show();
			} else {
				marker.hide();
			}

		},

		centerOn : function (_, position) {
			var map = this.myMap;
			map.setLatLong(position.latitude, position.longitude);
			map.setZoom(12);
		}

	}
});
