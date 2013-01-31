{Template {
	$classpath : 'samples.widgets.multiselect.SampleUsage',
	$hasScript : true
}}
	{macro main()}

		<h3>Display Both Code and Labels in a 4 column horizontal layout</h3>
		<p>
		{@aria:MultiSelect {
			activateSort : true,
			label : "My Multi-select:",
			labelWidth : 150,
			width : 400,
			fieldDisplay : "code",
			fieldSeparator :',',
			valueOrderedByClick : true,
			maxOptions : 7,
			onchange : onchange,
			numberOfRows : 4,
			displayOptions : {
				flowOrientation : 'horizontal',
				listDisplay : "both",
				displayFooter : true
			},
			items : data.items,
			bind : {
				value : {
					to : 'value',
					inside : data.content
				}
			}
		}/}
		</p><br/ ><br/ >

		<h3>Table Mode</h3>
		<p>Here we list all items in 1 colum and use "table mode" to break columns out of pipe (|) seperated data</p>
		<p>
		{@aria:MultiSelect {
			activateSort : true,
			label : "My Multi-select:",
			labelWidth : 150,
			width : 400,
			fieldDisplay : "code",
			fieldSeparator : ',',
			valueOrderedByClick : true,
			maxOptions : 7,
			numberOfRows : 9,
			displayOptions : {
				flowOrientation :'horizontal',
				tableMode : true,
				listDisplay : "both"
			},
			items : data.tableItems
		}/}
		</p><br/ ><br/ >

		<h3>Vertical Orientation with 1 Column</h3>
		<p>
		{@aria:MultiSelect {
			activateSort : true,
			label : "My Multi-select:",
			labelWidth : 150,
			width : 400,
			fieldDisplay : "code",
			fieldSeparator : ',',
			valueOrderedByClick : true,
			maxOptions : 7,
			onchange : onchange,
			numberOfColumns : 1,
			displayOptions : {
				flowOrientation : 'vertical',
				listDisplay : "code"
			},
			items : data.items
		}/}
		</p><br/ ><br/ >

		<h3>Vertical Orientation with 1 Column displaying code and label</h3>
		<p>
		{@aria:MultiSelect {
			activateSort : true,
			label : "My Multi-select:",
			labelWidth : 150,
			width : 400,
			fieldDisplay : "code",
			fieldSeparator : ',',
			valueOrderedByClick : true,
			maxOptions : 3,
			onchange : onchange,
			numberOfColumns : 1,
			displayOptions : {
				flowOrientation : 'vertical',
				listDisplay : "both"
			},
			items : data.items
		}/}
		</p>

	{/macro}
{/Template}
