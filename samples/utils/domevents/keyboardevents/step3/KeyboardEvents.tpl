{Template {
	$classpath : 'samples.utils.domevents.keyboardevents.step3.KeyboardEvents',
	$hasScript : true,
	$css : [
		'samples.utils.domevents.mouseevents.MouseEventsStyle',
		'samples.utils.domevents.keyboardevents.KeyboardEventsStyle'
	] 
}}

	{macro main()}
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
					{on focus {
						fn : this.onCheckboxFocus,
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