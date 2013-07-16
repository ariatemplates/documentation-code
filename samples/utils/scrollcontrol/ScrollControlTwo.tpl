{Template {
	$classpath:'samples.utils.scrollcontrol.ScrollControlTwo',
	$hasScript:true,
	$css:['samples.utils.scrollcontrol.ScrollControlTwoCSS']
}}


	{macro main()}
		<div>In this sample a repeater is used in order to add new lines. Whenever a new line is added,
		the scrollTop of the div that contains the list is incremented by the width of a line.</div><br/>

		<div class='myDiv' {id 'myTable'/}>
		{repeater {
				loopType: "array",
				content: myData.myArray,
				type: "UL",
				childSections : {
				        id: "myChildSection",
				        macro: {
				                name: "myMacro",
				                args: [],
				                scope:this
				        },
				        cssClass: 'myRow',
				        type: "LI"
				},
				attributes : { classList: ['myRepeater'] }
			}/}
		</div>
		<br/><br/>
		{@aria:Button {
			label: "Reset sample",
			onclick: resetSample
		}/}
	{/macro}

	/**
	 * macro that outputs the content of each section
	 * It receives as argument an object that provides useful information
	 * on the content to be displayed
	 */
	{macro myMacro(thisItem)}
		<span>{@aria:TextField {
				width: 100,
				bind: {
					value : {
						to : "city",
						inside : thisItem.item
					}
				},
				margins: "10 10 10 10"
		}/}</span>
		<span>{@aria:DatePicker {
				width: 100,
				margins: "10 10 10 10",
				bind: {
					value : {
						to : "date",
						inside : thisItem.item
					}
				}
		}/}</span>
		<span>{@aria:TimeField {
				width: 100,
				margins: "10 10 10 10",
				pattern:aria.utils.environment.Date.getTimeFormats().shortFormat,
				bind: {
					value : {
						to : "time",
						inside : thisItem.item
					}
				}
		}/}</span>
		<span>{@aria:Button {
				label:"Add",
				onclick: {
					fn : "addNext",
					args: [thisItem]
				},
				width:40,
				margins: "10 10 10 10"
			}/}</span>
		<span>{@aria:Button {
				label:"Remove",
				onclick: {
					fn : "removeThis",
					args: [thisItem]
				},
				width:70,
				margins: "10 10 10 10"
			}/}</span>
	{/macro}

{/Template}