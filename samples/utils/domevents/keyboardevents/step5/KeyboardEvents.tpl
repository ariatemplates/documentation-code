{Template {
	$classpath : 'samples.utils.domevents.keyboardevents.step5.KeyboardEvents',
	$hasScript : true,
	$css : [
		'samples.utils.domevents.mouseevents.MouseEventsStyle',
		'samples.utils.domevents.keyboardevents.KeyboardEventsStyle'
	]
}}

	{macro main()}
		<b>Step 5 is an optimized version of Step 4, using DomElementWrapper to avoid useless refresh.</b><br /><br />
		An <b>\{id\}</b> has been added on the containers in order to retrieve them from the template script.<br />
		We use the <b>DomElementWrapper</b> API to directly change the classnames of the boxes. The template is never entirely refreshed.<br />
		The "Selected index" info below the num pad has been migrated to a <b>section</b> with a binding on the selected index.<br /><br />

		<form
			{on keydown this.onCheckboxKeydown/}
			{on focus this.onCheckboxFocus/}
			style = "width:250px;padding:10px;padding-top:5px;" >
		{for var i=1 ; i < 10 ; i++}
			{var classname = this.data.selected == i ? " selected" : ""/}
			<div {id "box"+i/} class = "container box ${classname}">
				<span>${i}</span>
				<input
					{id "num"+i/}
					type="checkbox" value="${i}" data-index="${i}"/>
			</div>
		{/for}
		{section {
			id : "infoSection" ,
			macro : "macroContent",
			bindRefreshTo :[{
			   inside : data,
			   to : "selected"
  			}]
		}/}
		</form>
	{/macro}

	{macro macroContent()}
		<div class = "info">
			Selected index : ${isNaN(this.data.selected)?"no box selected":this.data.selected}
		</div>
	{/macro}
{/Template}
