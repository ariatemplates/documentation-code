{Template {
	$classpath:'samples.utils.autoresize.SubTemplate',
	$hasScript:false,
	$width:{min:250}
}}
	{macro main()}
		<div style="background:#F2ECDE;padding:10px">
			{@aria:TextField {
				value:'The size of this field changes according to the width of this template.',
				width:$hdim(150,1)
			}/}
			<br />
			This template has the following parameters:<br />
			Min width: 200<br />
			Width: ${$width}
		</div>
	{/macro}

{/Template}
