Aria.beanDefinitions({
	$package : "snippets.core.beans.ContactBeans",
	$description : "Definition of the beans used for contacts",
	$namespaces : {
		"json" : "aria.core.JsonTypes",
		"baseContact" : "snippets.core.beans.BaseContactBeans"
	},
	$beans : {
		"Person" : {
			$type : "baseContact:BaseContact",
			$description : "Advanced description of a contact",
			$properties : {
				"email" : {
					$type : "json:String",
					$description : "Email address",
					$regExp : /^\S+@\S+$/
				}
			}
		},
		"Animal" : {
			$type : "baseContact:BaseContact",
			$description : "Advanced description of a contact",
			$properties : {
				"type" : {
					$type : "json:String",
					$description : "Type of animal",
					$sample : "monkey",
					$mandatory : true
				}
			}
		},
		"Group" : {
			$type : "json:Map",
			$description : "Composition of a group",
			$contentType : {
				$type : "json:MultiTypes",
				$description : "Element of a group",
				$contentTypes : [{
					        $type : "Person"
				        }, {
					        $type : "Animal"
				        }]
			}
		}

	}
});