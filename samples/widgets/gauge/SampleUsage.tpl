{Template {
	$classpath : 'samples.widgets.gauge.SampleUsage',
	$hasScript : true,
	$width : {min: 500}
}}


	{macro main()}

		{@aria:TextField {
			label:"Gauge value",
			labelPos:"left",
			labelAlign:"left",
			width:200,
			block:true,
			labelWidth:100,
			bind: {
			  	"value":{inside:data,to:'currentValue'}
			}
		}/}
		<br/>
		<br/>
		Gauge with label
		<br/>
		{@aria:Gauge {
				minValue: -100,
				currentValue: 20,
				gaugeWidth: 200,
				labelWidth: 70,
				labelAlign: "left",
				sclass: "std",
				bind: {
				  	"currentValue": {
				  		inside: data,
				  		to: 'currentValue',
				  		transform : {
							toWidget : function(value) {
								var x = parseInt(value);
								if (!isNaN(x)) {
									return x;
								} else {
									return null;
								}
							}
						}
			  		},
				  	"maxValue":{inside: data, to: 'maxValue'},
				  	"label":{inside: data, to: 'label'}
				}
		}/}
		<br/>
		<br/>
		Gauge without label
		<br/>
		{@aria:Gauge {
				minValue: 0,
				maxValue: 100,
				gaugeWidth: 300,
				sclass: "std",
				bind: {
				  	"currentValue": {
				  		inside: data,
				  		to: 'currentValue',
				  		transform : {
							toWidget : function(value) {
								var x = parseInt(value);
								if (!isNaN(x)) {
									return x;
								} else{
									return null;
								}
							}
						}
			  		}
				}
		}/}
		<br/>
		<br/>
		{@aria:Button {
				id: "btnSearch",
				label: "Search",
				onclick: {
					fn: "startGauge",
					args: 100
				}
		}/}

		{@aria:Button {
				id: "btnClear",
				label: "Clear",
				onclick: {
					fn: "resetGauge"
				}
		}/}
	{/macro}
{/Template}
