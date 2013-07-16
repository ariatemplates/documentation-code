{Template {
	$classpath:'samples.utils.keynav.KeyboardNavigation',
	$hasScript: true,
	$css : ['samples.utils.keynav.KeyboardNavigationCSS']
}}

	{macro main()}


		<p>This table and the widgets can be navigated with the keyboard only. You must use the arrows with the CTRL modifier.</p>

		 {section {
		 	"id" : "mySection",
		 	"tableNav" : {
		 		ctrl:true
		 	}
		 }}

		 <fieldset>
		 	<legend>Section with table navigation</legend>

		 	{@aria:TextField {label:"Destination", id:"-1", block:true, labelWidth : 200, helptext: "first focus here"}/}

		 	{@aria:DatePicker {label:"Date", id:"0", block:true, labelWidth : 200}/}

		 	<br/>

		 	<div style="font-size: 12px;font-weight: bold;text-align: right;">Focus on: {@aria:Text {
		 		text : "None",
		 		bind : {
		 			text : {
		 				to : "selected",
		 				inside : data
		 			}
		 		}
		 	}/}</div>

		 	<table cellspacing="0" cellpadding="0" style="border:#4776A7 solid 1px;width:700px;">

		 		<tr class="uicPaletteDark">
		 			<th style="padding:5px; border-right: solid 1px white;">Choose</th>
		 			<th style="padding:5px; border-right: solid 1px white;">Index</th>
		 			<th style="padding:5px; border-right: solid 1px white;">Options <div style='color:white;font-weight:normal;'>In the cells of this column, first element is focused</div></th>
		 			<th style="padding:5px; border-right: solid 1px white;">Comments</th>
		 			<th style="padding:5px">Price</th>
		 		</tr>

		 		{foreach line inArray this.data.tableSamples}

		 			{var colorBorder = line_index % 2 ? "white" : "#EFF9FF"/}

		 			{if (line_index %5 ==0 && line_index>0)}
		 				<tr class="uicPaletteDark"><td colspan="5" style="padding:5px">Line ${line_index+1} to ${line_index+5}</td></tr>
		 			{/if}

		 			<tr class="{if (line_index%2)}uicPaletteMedium{else/}uicPaletteLight{/if}"
		 				{on focus {
		 					fn : select,
			 				args : line_index
		 				}/}>
		 				<td rowspan="${line.comments.length}" style="border-right: solid 1px ${colorBorder}">{@aria:CheckBox {
		 					bind : {
		 						value : {
		 							to : "choose",
		 							inside : line
		 						}
		 					}
		 				}/}</td>
		 				<td rowspan="${line.comments.length}" style="border-right: solid 1px ${colorBorder}">
		 					${line_index+1}
		 				</td>

		 				<td rowspan="${line.comments.length}" style="border-right: solid 1px ${colorBorder}">
		 					{for var i = 0, l = line.options.length; i<l; i++}
		 						{@aria:CheckBox {
		 							label : "Opt." + (i+1),
		 							bind : {
		 								value : {
		 									to : i,
		 									inside : line.options
		 								}
		 							}
		 						}/}
		 					{/for}
		 				</td>

		 				<td style="border-right: solid 1px ${colorBorder}">
			 				{@aria:TextField {
			 					value : line.comments[0]
			 				}/}
			 			</td>
		 				<td rowspan="${line.comments.length}">
		 					<a href="">${line.price}</a>
		 				</td>
		 			</tr>

		 			{for var i = 1, l = line.comments.length; i<l; i++}
			 			<tr class="{if (line_index %2)}uicPaletteMedium{else/}uicPaletteLight{/if}"
				 			{on focus {
			 					fn : select,
			 					args : line_index
			 				}/}>
			 				<td style="border-right: solid 1px ${colorBorder}">
			 				{@aria:TextField {
			 					value : line.comments[i]
			 				}/}
			 				</td>
			 			</tr>
		 			{/for}
		 		{/foreach}
			</table>


			<br/>
			{@aria:Button {label:"Continue", id:"6", block:true}/}

		 	</fieldset>
		 {/section}

 	{/macro}


{/Template}