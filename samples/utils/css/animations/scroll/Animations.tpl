{Template {
  $classpath:'samples.utils.css.animations.scroll.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
        <div {on click {fn:"onClick"}/} id="exampleContainer" style="background:yellow; height: 300px; position:relative; overflow: scroll;">
			<div id="exampleDiv" style="width: 100px; height: 70px; margin-left:0px; top: 800px; left: 2000px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; position: relative;">Click me!</div>
        </div>		
	{/macro}

{/Template}