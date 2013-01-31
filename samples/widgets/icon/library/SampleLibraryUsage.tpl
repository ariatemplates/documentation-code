{Template {
	$classpath : 'samples.widgets.icon.library.SampleLibraryUsage' } }

	{macro main ( )}
		{var sclasses = ["std","std8x8"] /}
		{foreach sclass inArray sclasses}
			{var skinObject = aria.widgets.AriaSkinInterface.getSkinObject("Icon",sclass,true)/}
			{if skinObject}
				<div>
					<br />
					<h4>${sclass} icon sets</h4>
					<br />
						{foreach type in skinObject.content}
							<span style="display:inline-block;width:110px;height:30px;">
								{@aria:Icon {icon: sclass + ":" + type_index}/}
								&nbsp;&nbsp;${type_index}
							</span>
						{/foreach}

				</div>
			{/if}
		{/foreach}

	{/macro}

{/Template}
