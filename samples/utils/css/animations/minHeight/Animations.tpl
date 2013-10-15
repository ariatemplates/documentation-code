{Template {
  $classpath:'samples.utils.css.animations.minHeight.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 100px; height: 40px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;  min-height: 30px;">Click me!</div>
	{/macro}


{/Template}