{Template {
  $classpath:'samples.utils.css.animations.minWidth.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 50px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; min-width: 40px;">Click me!</div>
	{/macro}


{/Template}