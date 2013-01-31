{Template {
  $classpath:'samples.utils.visualfocus.VisualFocus',
  $hasScript: true
}}
	{var outlineStyle = {style : ""}/}
	{macro main()}
	
	
	<p>In order to see what it looks like, write the style (for example, <span style="color: #4776A7; font-weight: bold">red dashed 2px</span>) in the following text field, then click on the "Apply" button.
	Click the "Reset" button to eliminate the visual focus.</p>
	<p>When the style is applied, you can navigate through the demo site with the visual focus on.</p>
	<br/>
	<span style="display:inline-block; color: #4776A7; font-weight: bold">NOTE: Visual focus is not supported in IE7.</span>
	<br/><br/>		
		<div style="margin: 10px 0px 10px 0px;">
		{@aria:TextField {
			label:"outline style",
			labelPos:"top",
			labelAlign:"left",
			width:200,
			labelWidth:300,
			margins: "0 10 0 10", 
			bind:{
			  	"value":{inside:outlineStyle, to:'style'}
			}
		}/}
		
		{@aria:Button {
			label:"Apply",
			onclick:"setVisualFocus",
			margins: "0 0 10 10", 
			width:100
		} /}
		{@aria:Button {
			label:"Reset",
			onclick:"resetVisualFocus",
			margins: "0 0 10 10", 
			width:100
		} /}
		</div>

	{/macro}

{/Template}