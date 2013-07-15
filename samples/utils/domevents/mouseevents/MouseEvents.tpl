{Template {
	$classpath : 'samples.utils.domevents.mouseevents.MouseEvents',
	$hasScript : true,
	$css : [ 'samples.utils.domevents.mouseevents.MouseEventsStyle' ] } }

	{macro main ( )}
		<div style = "width:250px;padding:10px;padding-top:5px;" >
		{for var i=1 ; i < 10 ; i++}
			{var classname = this.data.selected == i ? " selected" : ""/}
			<div class = "container box ${classname}"
			{on click {
				fn : this.onBoxClick,
				scope : this,
				args : { index : i }
			}/} >
				<span class="content"> ${i} </span>
			</div>
		{/for}
		<div class = "info" >
			Selected index : ${isNaN(this.data.selected)?"no box selected":this.data.selected}
		</div>
		</div>
	{/macro}
{/Template}