{Template {
	$classpath : 'samples.utils.domevents.keyboardevents.step4.KeyboardEvents',
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
			{if !aria.core.Browser.isIE}
				{on change this.onCheckboxChange/}
			{/if}
			style = "width:250px;padding:10px;padding-top:5px;" >
		{for var i=1 ; i < 10 ; i++}
			{var classname = this.data.selected == i ? " selected" : (this.data.checked[i]? "checked" : "")/}
			{var checked = this.data.checked["num"+i] ? "checked" : ""/}
			<div class = "container box ${classname}">
				<span>${i}</span>
				<input
					{if aria.core.Browser.isIE}
						{on change this.onCheckboxChange/}
					{/if}
					{id "num"+i/}
					type="checkbox" value="${i}" data-index="${i}" ${checked}/>
			</div>
		{/for}
		<div class = "info" >
			Selected index : ${isNaN(this.data.selected)?"no box selected":this.data.selected}
		</div>
		</form>
	{/macro}
{/Template}