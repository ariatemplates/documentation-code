Aria.beanDefinitions({
	$package : "samples.widgets.widgetlibs.slider.widget.SliderCfgBeans",
	$description : "Slider config beans",
	$namespaces : {
		"json" : "aria.core.JsonTypes"
	},
	$beans : {
		"SliderCfg" : {
			$type : "json:Object",
			$description : "Configuration of the slider widget.",
			$properties : {
				width : {
					$type : "json:Integer",
					$description : "Width to use for the widget.",
					$default : 100
				},
				bindValue : {
					$type : "json:Object",
					$description : "Binding for the value of the slider.",
					$properties : {
						inside : {
							$type : "json:ObjectRef",
							$description : "Reference to the object that holds the property to bind to.",
							$mandatory : true
						},
						to : {
							$type : "json:String",
							$description : "Name of the JSON property to bind to.",
							$mandatory : true
						}
					}
				}
			}
		}
	}
});
