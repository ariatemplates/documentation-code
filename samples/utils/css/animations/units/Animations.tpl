{Template {
  $classpath:'samples.utils.css.animations.units.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div id="exampleDiv" style="width: 100px; height: 70px; margin-left:0px; background: url(/images/logo-page.png) no-repeat;"></div>
        <button {on click "onClick"/}>Animate</button>
	{/macro}

{/Template}
