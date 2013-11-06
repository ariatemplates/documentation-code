{Template {
  $classpath:'samples.utils.css.animations.easing2.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div id="exampleDiv" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
        <button {on click "onClick"/}>Animate</button>
	{/macro}


{/Template}
