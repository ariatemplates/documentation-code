{Template {
	$classpath : 'samples.utils.domevents.eventsingleton.UtilsEvents',
	$hasScript : true,
	$css : [
		'samples.utils.domevents.mouseevents.MouseEventsStyle',
		'samples.utils.domevents.keyboardevents.KeyboardEventsStyle'
	]
}}

	{macro main()}
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
			bindRefreshTo :[{
			   inside : data,
			   to : "selected"
  			}]
			}
		}
			<div class = "info">
				Selected index : ${isNaN(this.data.selected)?"no box selected":this.data.selected}
			</div>
		{/section}
		</form>
	{/macro}
{/Template}