Aria.classDefinition({
	$classpath : 'samples.templates.cssTemplates.SampleData',
	$singleton : true,
	$constructor : function () {},
	$prototype : {
		data : {
			notes : {
				"Fruit" : [{
					        name : "apples",
					        taken : false
				        }, {
					        name : "pears",
					        taken : false
				        }, {
					        name : "bananas",
					        taken : false
				        }, {
					        name : "peaches",
					        taken : true
				        }, {
					        name : "oranges",
					        taken : false
				        }],
				"Clothes" : [{
					        name : "shirts",
					        taken : false
				        }, {
					        name : "trousers",
					        taken : false
				        }],
				"Vegetables" : [{
					        name : "eggplants",
					        taken : false
				        }, {
					        name : "tomatoes",
					        taken : false
				        }, {
					        name : "salad",
					        taken : true
				        }, {
					        name : "peppers",
					        taken : false
				        }]
			}

		}

	}
});