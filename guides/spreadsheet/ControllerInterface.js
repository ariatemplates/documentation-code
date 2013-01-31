Aria.interfaceDefinition({
	$classpath : 'ariadoc.guides.spreadsheet.ControllerInterface',
	$extends : 'aria.templates.IModuleCtrl',
	$interface : {
    createNewDataset : {$type : "Function"},
    copyDataset : {$type : "Function"},
    loadDataset : {$type : "Function",$callbackParam: 1},
    editCell : {$type : "Function"},
    selectDataset : {$type : "Function"},
    saveChanges : {$type : "Function"},
    cancelChanges : {$type : "Function"}
	}
});
