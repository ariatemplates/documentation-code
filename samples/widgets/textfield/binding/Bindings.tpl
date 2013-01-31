{Template {
	$classpath : "samples.widgets.textfield.binding.Bindings" } }

	{macro main ( )}

		{@aria:TextField {
			label : "Standard",
			labelPos : "left",
			helptext : "Enter your first name",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : data,
					to : 'value' }
			}
		}/}

		<br />
		{@aria:TextField {
			label : "Disabled",
			labelPos : "left",
			width : 280,
			helptext : "Enter your address",
			block : true,
			disabled : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : data,
					to : 'value' }
			}
		}/}

		<br />
		{@aria:TextField {
			label : "Read Only",
			labelPos : "left",
			width : 280,
			block : true,
			readOnly : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : data,
					to : 'value' }
			}
		}/}

		<br />
		{@aria:TextField {
			label : "Mandatory",
			labelPos : "left",
			width : 280,
			block : true,
			mandatory : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : data,
					to : 'value' }
			}
		}/}

		<p> Bind the label to the datamodel </p>
		<br />
		{@aria:TextField {
			label : "Label",
			labelPos : "left",
			width : 280,
			block : true,
			readOnly : true,
			labelWidth : 100,
			value : "Label is bound to the data model",
			bind : {
				"label" : {
					inside : data,
					to : 'value' }
			}
		}/}

	{/macro}

{/Template}
