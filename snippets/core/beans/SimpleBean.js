Aria.beanDefinitions({
	$package : "snippets.core.beans.SimpleBean",
	$description : "Definition of a simple bean",
	$namespaces : {
		"json" : "aria.core.JsonTypes"
	},
	$beans : {
		"Name" : {
			$type : "json:String",
			$description : "Name of a person"
		},
		"Age" : {
			$type : "json:Integer",
			$description : "Age of a person"
		}
	}
});