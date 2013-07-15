{Template {
	"$classpath" : 'samples.features.refresh.TemplateRefresh',
	"$hasScript" : true
}}

	{macro main()}
		{call sectionBinding()/}
		<hr/>
		{var doInit = initCountIfNeeded() /}
		<br/>
		<b>Main macro:</b> Count=${data["view:count"]}<br/>

		{section "Section1"}
			<b>Section1:</b> Count=${data["view:count"]}
		{/section}<br/>

		{for var i=0;3>i;i++}
			{section "SectionX_"+i}
				<b>SectionX_${i}:</b> Count=${data["view:count"]}<br/>
				{for var j=0;2>j;j++}
					{section "SectionX_"+i+"_"+j}
						<b>SectionX_${i}_${j}:</b> Count=${data["view:count"]}
					{/section}<br/>
				{/for}
			{/section}
		{/for}
		{section "sectionMacroRefresh"}
			{call macroRefresh()/}
		{/section}<br/>

		<br/>
		{for var i=1;3>i;i++}
			// 2 Fields bound to the same data !
			{@aria:TextField {
				label:'Count Value (display #'+i+'):',
				tooltip:'Type any value to update the counter (note: you will need to explicitly call of a refresh to update non-bound data)',
				bind:{
					value:{to:"view:count", inside:data}
				}
			}/}
			<br/>
		{/for}
		<br/>

		Refresh:
		{@aria:Button {
			label:'All',
			onclick:'updateCountAndRefresh'
		}/}
		{@aria:Button {
			label:'Section1',
			onclick:{ fn: updateCountAndRefresh, args: {filterSection:"Section1"} }
		}/}
		{@aria:Button {
			label:'SectionX_1',
			onclick:{ fn: updateCountAndRefresh, args: {filterSection:"SectionX_1"} }
		}/}
		{@aria:Button {
			label:'SectionX_1_1',
			onclick:{ fn: updateCountAndRefresh, args: {filterSection:"SectionX_1_1"} }
		}/}
		{@aria:Button {
			label:'macroRefresh',
			onclick:{ fn: updateCountAndRefresh, args: {outputSection:"sectionMacroRefresh", macro: "macroRefresh"} }
		}/}


	{/macro}

	{macro macroRefresh()}
		<b>macroRefresh:</b> Count=${data["view:count"]}
	{/macro}

	{macro sectionBinding()}
		<h2>Section Bindings</h2>

		{section {
			id: "SectionA",
			bindRefreshTo : [{inside: data, to: "sectionRefresh"}]
		}}
			<p>
				{@aria:NumberField {
					label:"Bound Number field:",
					labelPos:"left",
					labelAlign:"right",
					block:true,
					value:'0',
					disabled: true,
					value:data['sectionRefresh'],
					errorMessages:["Please type in a number"]
				}/}
				<br/>
				{@aria:Button {
					label:"Increment value in datamodel ++",
					onclick: {
							fn: "onclickrefresh",
							args: "2"
					}
				}/}
			</p>
			<br/>
				{section "SectionA1"}
					<h2>Child Section</h2>
					<p>Bound number field should show <b>${data.sectionRefresh}</b></p>
				{/section}
			{call sectionBinding2()/}
		{/section}
	{/macro}
	{macro sectionBinding2()}
		{section "SectionA2"}
			<h2>Child Section within a sub macro</h2>
			<p>The bound number field should show <b>${data.sectionRefresh}</b></p>
		{/section}
	{/macro}
{/Template}