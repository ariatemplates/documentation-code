/**
 * Beans for Map
 */
Aria.beanDefinitions({
	$package : "samples.widgets.customMap.provider.MapBeans",
	$description : "Definition of the JSON beans used to create a map",
	$namespaces : {
		"json" : "aria.core.JsonTypes"
	},
	$beans : {
		"Map" : {
			$type : "json:Object",
			$description : "Configuration properties for a map",
			$properties : {
				"longitude" : {
					$type : "json:Float",
					$description : "The longitude of the start point",
					$default : 0
				},
				"latitude" : {
					$type : "json:Float",
					$description : "The latitude of the start point",
					$default : 0
				},
				"zoomLevel" : {
					$type : "json:Integer",
					$description : "Specified the inital zoom level. If no latitude/longitude is present the zoom Level is 0",
					$default : 15
				},
				"overviewMap" : {
					$type : "json:Boolean",
					$description : "Boolean value to display overview map",
					$default : true
				},
				"doubleClickZoom" : {
					$type : "json:Boolean",
					$description : "Boolean value allowing double click zoom in",
					$default : true
				},
				"controls" : {
					$type : "json:Boolean",
					$description : "Boolean value defining if the controls (navigation and zoom control) should be displayed",
					$default : true
				},
				"mapType" : {
					$type : "json:Enum",
					$description : "Specifies the type of the map that can be used: road, satellite, physical, hybrid or all",
					$enumValues : ["road", "satellite", "hybrid", "physical", "all"],
					$default : "road"
				},
				"mapChooser" : {
					$type : "json:Boolean",
					$description : "Specifies if the map type control should be displayed. The map type control allows to specify the map type(road, satellite, hybrid)",
					$default : false
				},
				"scrollWheelZoom" : {
					$type : "json:Boolean",
					$description : "Specifies if using the scroll wheel on a map should zoom in and out",
					$default : true
				},
				"display" : {
					$type : "json:Boolean",
					$description : "Specifies if component has to be hidden (css attribute display: none)",
					$default : true
				},
				"locale" : {
					$type : "json:String",
					$description : "Specify the locale to use for the map and which will be used to display the text information on this map",
					$default : "en-US"
				},
				"markerGroups" : {
					$type : "json:Array",
					$description : "Definition of the groups of markers",
					$contentType : {
						$type : "MarkerGroupCfg"
					},
					$default : []
				}
			}
		},
		"MarkerGroupCfg" : {
			$type : "json:Object",
			$description : "Configuration of a marker group",
			$properties : {
				"name" : {
					$type : "json:String",
					$description : "Name of the group",
					$mandatory : true
				},
				"markerType" : {
					$type : "json:String",
					$description : "Type of the marker. It dictates the style of the markers belonging to the group"
				}
			}
		},

		"MarkerCfg" : {
			$type : "json:Object",
			$description : "Configuration of a marker"
			// TODO
		}

	}
});
