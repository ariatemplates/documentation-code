{Template {
	$classpath:'samples.widgets.multiselect.binding.TemplateMultiSelect',
	$hasScript:true	
}}

	{var contentNormal = {value : ['AF', 'AC']}/}
	{var contentInstant = {value : ['AF', 'AC']}/}

	{macro main()}
	
		<p><b>Click the icon on the right:</b></p><br/>
		<p>
		{var testItems = [
				{value:'AF', label:'Air France', disabled:false},
				{value:'AC', label:'Air Canada', disabled:false},
				{value:'NZ', label:'Air New Zealand', disabled:false},
				{value:'DL', label:'Delta Airlines', disabled:false}, 
           		{value:'AY', label:'Finnair', disabled:false},
				{value:'IB', label:'Iberia', disabled:true},
				{value:'LH', label:'Lufthansa', disabled:false},
				{value:'MX', label:'Mexicana', disabled:false},
				{value:'QF', label:'Quantas', disabled:false}				
			]/}
		{var tableItems = [
				{value:'AF1', label:'Air France|1st Class|AF', disabled:false},
				{value:'AF2', label:'Air France|Business Class|AF', disabled:false},
				{value:'AC1', label:'Air Canada|1st Class|AF', disabled:false},
				{value:'AC2', label:'Air Canada|Business Class|AF', disabled:false}
			]/}

		<table><tr><td>
			<p>
			{@aria:MultiSelect {
				activateSort: true,
				label: "My Multi-select:",
				labelWidth:150,
				width:400,
				fieldDisplay: "code",
				fieldSeparator:',',
				valueOrderedByClick: true,
				maxOptions:4,
				onchange:onchange,
				numberOfColumns:1,
				displayOptions : {
					flowOrientation:'vertical',
					listDisplay: "both"		
				},
				items:testItems,
				bind:{
					value : {
						to : 'value',
						inside : contentInstant
					}
				},
				instantBind : true
			}/} 
			</p>
		</td><td>
			{section {
				id: "selectedWithInstantBind",
				macro : "selectedWithInstantBind",
				bindRefreshTo : [{
					to : "value",
					inside : contentInstant
				}]
			}/}
		</td></tr></table>
		
		<br/><br/><br/>
	{/macro}
	
		{macro selectedNoInstantBind()}
			SELECTED: {foreach item in contentNormal.value}
				${item} &nbsp;
			{/foreach}
		{/macro}

		{macro selectedWithInstantBind()}
			SELECTED: {foreach item in contentInstant.value}
				${item} &nbsp;
			{/foreach}
		{/macro}
		
{/Template}

