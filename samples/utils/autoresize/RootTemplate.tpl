{Template {
	$classpath:'samples.utils.autoresize.RootTemplate',
	$width:{min:600},
	$height:{min:400}
}}

	{macro main()}
		<h1>Aria templates: <span class="title">Auto resize</span></h1>
		<div style="min-width: 600; min-height: 400;width:${$width-2-4}px;height:${$height-2-4}px; padding: 2px;">
			// Show this page in: <a href="?">normal mode</a> <a href="?minSizeMode">minimum size mode</a>
			<div style="height: 70px; padding: 5px;">			
				Min width: 600<br />
				Width: ${$width}<br />
				Min height: 400<br />
				Height: ${$height}<br />
			</div>
			The sub-template below has a minimum size of 592x110 and take all horizontal remaining space and half vertical remaining space.<br />
			{@aria:Template {
				width:$hdim(592,1),
				height:$vdim(110,0.5),
				margins:"1 1 1 1",
				defaultTemplate:'samples.utils.autoresize.SubTemplate'
			}/}
			<br />The sub-templates below have a minimum size of 294x110 and take half of the remaining space horizontally and vertically.<br />
			{@aria:Template {
				width:$hdim(294,0.5),
				height:$vdim(110,0.5),
				margins:"1 1 1 1",
				defaultTemplate:'samples.utils.autoresize.SubTemplate'
			}/}
			{@aria:Template {
				width:$hdim(294,0.5),
				height:$vdim(110,0.5),
				margins:"1 1 1 1",
				defaultTemplate:'samples.utils.autoresize.SubTemplate'
			}/}

		</div>
	{/macro}

{/Template}
