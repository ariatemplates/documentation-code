Aria.beanDefinitions({
	$package : "snippets.core.beans.AnotherSimpleBean",
	$description : "Definition of a simple bean",
	$namespaces : {
		"json" : "aria.core.JsonTypes"
	},
	$beans : {
////#example
		"Name" : {
			$type : "json:String",
			$description : "Name of a person",
			$sample : "Jean",
			$mandatory : true,
			$regExp : /^[a-zA-Z]+$/
		},
		"Age" : {
			$type : "json:Integer",
			$description : "Age of a person",
			$sample : 30,
			$default : 25,
			$minValue : 18,
			$maxValue : 99
		}
////#example
	}
});