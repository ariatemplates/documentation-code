Aria.beanDefinitions({
	$package : "ariadoc.snippets.core.beans.BaseContactBeans",
	$description : "Definition of the basic beans used for contacts",
	$namespaces : {
		"json" : "aria.core.JsonTypes"
	},
	$beans : {
		"Address" : {
			$type : "json:Object",
			$description : "Description of an address",
			$properties : {
				"city" : {
					$type : "json:String",
					$description : "City name",
					$sample : "Chicago",
					$mandatory : true
				},
				"country" : {
					$type : "json:String",
					$description : "Country name",
					$sample : "USA",
					$default : "Canada"
				}
			}
		},
		"BaseContact" : {
			$type : "json:Object",
			$description : "Basic description of a contact",
			$properties : {
				"name" : {
					$type : "json:String",
					$description : "First name",
					$mandatory : true
				},
				"dateOfBirth" : {
					$type : "json:Date",
					$description : "Date of birth",
					$sample : "09/03/1984"
				},
				"address" : {
					$type : "json:Array",
					$description : "List of complete addresses of a contact",
					$contentType : {
						$type : "Address",
						$description : "Address of a contact"
					}
				}

			}
		}
	}
});