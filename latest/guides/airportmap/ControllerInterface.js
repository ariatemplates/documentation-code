Aria.interfaceDefinition({
	$classpath : 'ariadoc.guides.airportmap.ControllerInterface',
	$extends : 'aria.templates.IModuleCtrl',
	$interface : {
    loadData : {$type : "Function",$callbackParam: 1},
    updateData : {$type : "Function",$callbackParam: 0},

    //updateData  // poll the DB to get new values
    //centerZoom
    //showLayer(layerId)
    //hideLayer(layerId)
    //updateEltInfo(elementId) // to be called when an element is selected to get latest values

    zoom: {$type : "Function"}
	}
});
