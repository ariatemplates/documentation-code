Aria.beanDefinitions({
    $package : "ariadoc.guides.mall.Beans",
    $description : "Mall definitions",
    $namespaces : {
        "json" : "aria.core.JsonTypes"
    },
    $beans : {
        "Court" : {
            $type : "json:Object",
            $description : "Mall area",
            $properties : {
                "counters" : {
                    $type : "json:Array",
                    $description : "List of counters in this court",
                    $contentType : {
                        $type : "Counter",
                        $description : "A single counter"
                    },
                    $default : []
                },

                "slots" : {
                    $type : "json:Array",
                    $description : "List of counters' slot in the mall",
                    $contentType : {
                        $type : "Slot",
                        $description : "A single slot"
                    },
                    $default : []
                }
            }
        },

        "Counter" : {
            $type : "json:Object",
            $description : "Counter",
            $properties : {
                "open" : {
                    $type : "json:Boolean",
                    $description : "Whether this counter is open for business"
                },
                "type" : {
                    $type : "json:String",
                    $description : "Type of goods sold by the counter"
                },
                "owners" : {
                    $type : "json:Integer",
                    $description : "Number of people owning this counter",
                    $default : 1
                },
                "employees" : {
                    $type : "json:Integer",
                    $description : "Number of people working as employees at the counter"
                },
                "people" : {
                    $type : "json:Integer",
                    $description : "Total number of people"
                },
                "slot" : {
                    $type : "Slot",
                    $description : "Assigned slot in the court"
                },
                "assignedTo" : {
                    $type : "json:Integer",
                    $description : "Assigned slot position, used for bindings",
                    $default : -1
                }
            }
        },

        "Slot" : {
            $type : "json:Object",
            $description : "A single slot",
            $properties : {
                "usable" : {
                    $type : "json:Boolean",
                    $description : "Whether this slot can be used or not",
                    $default : true
                },

                "counter" : {
                    $type : "Counter",
                    $description : "Counter assigned to this slot"
                },

                "neighbours" : {
                    $type : "json:Array",
                    $description : "List of neighbouring slots",
                    $contentType : {
                        $type : "Slot",
                        $description : "Neighbouring slots"
                    },
                    $default : []
                },

                "position" : {
                    $type : "json:Integer",
                    $description : "Position in the court"
                }
            }
        }
    }
})