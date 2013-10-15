{Template {
  $classpath:'samples.utils.css.animations.top.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; position: relative;">Click me!</div>
	{/macro}


{/Template}