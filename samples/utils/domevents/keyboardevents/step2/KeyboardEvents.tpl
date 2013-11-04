{Template {
	$classpath : 'samples.utils.domevents.keyboardevents.step2.KeyboardEvents',
	$hasScript : true,
	$css : [
		'samples.utils.domevents.mouseevents.MouseEventsStyle',
		'samples.utils.domevents.keyboardevents.KeyboardEventsStyle'
	]
}}

	{macro main()}
		<b>Checkbox selections are now preserved after a refresh.</b><br /><br />
		In addition to the previous <b>\{on keydown\}</b> handler, the checkboxes now also have an <b>\{on change\}</b> handler.<br />
		This <b>\{on change\}</b> handler is used to store the state of checkboxes in the datamodel.<br /><br />

		<form style = "width:250px;padding:10px;padding-top:5px;" >
		{for var i=1 ; i < 10 ; i++}
			{var classname = this.data.selected == i ? " selected" : (this.data.checked[i]? "checked" : "")/}
			{var checked = this.data.checked["num"+i] ? "checked" : ""/}
			<div class = "container box ${classname}">
				<span>${i}</span>
				<input
					{on keydown {
						fn : this.onCheckboxKeydown,
						scope : this,
						args : { index : i }
					}/}
					{on change {
						fn : this.onCheckboxChange,
						scope : this,
						args : { index : i }
					}/}
					{id "num"+i/}
					type="checkbox" value="${i}" ${checked}/>
			</div>
		{/for}
		<div class = "info" >
			Selected index : ${isNaN(this.data.selected)?"no box selected":this.data.selected}
		</div>
		</form>
	{/macro}
{/Template}
