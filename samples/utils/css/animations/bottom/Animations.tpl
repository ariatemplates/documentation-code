{Template {
  $classpath:'samples.utils.css.animations.bottom.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div {on click "onClick"/} id="exampleDiv" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; position: relative; bottom: -30px;">Click me!</div>
	{/macro}


{/Template}