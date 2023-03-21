{Template {
  $classpath:'samples.utils.css.animations.multiple.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 100px; height: 70px; background: url(/images/logo-page.png) no-repeat;"></div>
        <button {on click "onClick"/}>Animate</button>
	{/macro}

{/Template}
