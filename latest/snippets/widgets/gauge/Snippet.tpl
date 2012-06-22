{Template {
	$classpath : "ariadoc.snippets.widgets.gauge.Snippet"
}}

	{macro main ( )}

	////#wgtGauge
		{@aria:Gauge {
			minValue : -100,
			maxValue :  100,
			bind : {
				"currentValue" : {
					inside : data.widgets,
					to : gaugeCurrentValue
				}
			}
		}/}
	////#wgtGauge

	{/macro}

{/Template}
