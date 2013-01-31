{Template {
	$classpath : "snippets.widgets.gauge.Snippet"
}}

	{macro main()}

    	{var data={widgets:{gaugeCurrentValue:0}}/}

    	////#wgtGauge
    		{@aria:Gauge {
    			minValue : -100,
    			maxValue :  100,
    			bind : {
    				"currentValue" : {
    					inside : data.widgets,
    					to : "gaugeCurrentValue"
    				}
    			}
    		}/}
    	////#wgtGauge

	{/macro}

{/Template}
