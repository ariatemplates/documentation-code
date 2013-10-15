{Template {
  $classpath:'samples.utils.css.animations.maxHeight.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; max-height: 70px;">Click me!</div>
	{/macro}


{/Template}