{Template {
  $classpath:'samples.utils.css.animations.borderSpacing.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<table {on click "onClick"/} id="exampleDiv" style="border-spacing: 1px; border: 1px solid black;">
			<tr>
				<td style="border: 1px solid black;">Click</td>
				<td style="border: 1px solid black;">me!</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">Click</td>
				<td style="border: 1px solid black;">me!</td>
			</tr>
		</table>

	{/macro}


{/Template}