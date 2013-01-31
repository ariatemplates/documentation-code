{Template {
	$classpath : "samples.widgets.textfield.transform.Transforms" } }
	{var localDataModel = { value : "Some Random Text..." }/}

	{macro main ( )}
		<p>
		{@aria:TextField {
			label : "Standard",
			labelPos : "left",
			helptext : "Enter your first name",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : localDataModel,
					to : 'value' }
			}
		}/}

		<br /> Transform method reverses the string from / to the datamodel .
		{@aria:TextField {
			label : "Simple Transform",
			labelPos : "left",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : localDataModel,
					to : 'value',
					transform : function (value) {
							// Reverse the string
							return value.split("").reverse().join("");
						}}
			}
		}/}

		Transform method reverses the string from the datamodel and changes it in uppercase from the widget . <br />
		{@aria:TextField {
			label : "Advanced Transform",
			labelPos : "left",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
				"value" : {
					inside : localDataModel,
					to : 'value',
					transform : {
						toWidget : function (value) {
								// From the data model to the widget
								return value.split("").reverse().join("");
							},
						fromWidget : function (value) {
								// From the widget to the datamodel
								return value.toUpperCase();
							}}
				}
			}
		}/}
		</p>
	{/macro}

{/Template}
