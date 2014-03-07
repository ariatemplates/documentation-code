{Template {
  $classpath:'samples.utils.css.animations.scroll.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}

        <div {on click {fn:"onClick"}/} id="exampleContainer" style="height: 300px; width: 300px; position:relative; overflow: scroll;">
        	Scroll down!
			<div id="exampleDiv" style="width: 100px; height: 70px; margin-left:0px; top: 400px; left:0; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; position: relative;">Click me!</div>
        </div>
	{/macro}

{/Template}
