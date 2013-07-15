{Template {
	$classpath:'tutorials.repeater.step1.RepeaterStepOne',
	$hasScript:true,
	$css:['tutorials.repeater.step1.RepeaterStepOneCSS']
}}

	{macro main()}
		<h2>Repeater sample</h2>
			This example shows how to use the repeater statement with an array.
			The repeater is similar to a foreach loop, with the extra feature of automatically managing the insertion and removal
			of sections in the page when changes are done in the array.
			Only the changed sections are refreshed.
		<br/><br/>
		<table>
			{repeater {
				loopType: "array",  // specify that the repeater is attached to an array 
				// (note that if this parameter is missing, it will be detected automatically for
				// arrays and maps)
				content: myData.myArray, // array to which the repeater content is bound
				type: "TBODY", // type of the HTML Element that corresponds to the repeater in the DOM
				childSections : { // features of the sections that the repeater has to manage
				        id: "myChildSection", // basic id that is suffixed by the repeater in order to identify
				        						// all the displayed sections
				        macro: { // the macro that is called whenever a section has to be generated or refreshed
				                name: "myMacro",
				                args: [],
				                scope:this
				        },
				       
				        type: "TR", // type of the HTML Element corresponding to each of the child sections
				        cssClass: myCSSFunction // specifies the class of the HTML Element corresponding to a
				        							// child section.
				        	// It can also be a function. See the script for an example
				}
			}/}
		</table>
		
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
		<td>{@aria:TextField {
				width: 100,
				bind: {
					value : {
						to : "city",
						inside : thisItem.item
					}
				},
				margins: "10 10 10 10"
		}/}</td>
		<td>{@aria:DatePicker {
				width: 100,
				margins: "10 10 10 10",
				bind: {
					value : {
						to : "date",
						inside : thisItem.item
					}
				}
		}/}</td>
		<td>{@aria:TimeField {
				width: 100,
				margins: "10 10 10 10",
				pattern:aria.utils.environment.Date.getTimeFormats().shortFormat,
				bind: {
					value : {
						to : "time",
						inside : thisItem.item
					}
				}
		}/}</td>
		<td>{@aria:Button {
				label:"Add",
				onclick: {
					fn : "addNext",
					args: [thisItem]
				},
				width:40,
				margins: "10 10 10 10"
			}/}</td>
		<td>{@aria:Button {
				label:"Remove",
				onclick: {
					fn : "removeThis",
					args: [thisItem]
				},
				width:70,
				margins: "10 10 10 10"
			}/}</td>
		<td>{@aria:Button {
				label:"Refresh",
				onclick: {
					fn : "refreshThis",
					args: [thisItem]
				},
				width:70,
				margins: "10 10 10 10"
			}/}</td>
		<td style="width:70px;padding-left:10px;"> refresh: ${updateRefreshCountOf(thisItem)}</td>
	{/macro}

{/Template}