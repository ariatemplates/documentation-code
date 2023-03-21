{Template {
  $classpath:'samples.utils.css.animations.callbacks.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
	    {section {
	        id : "callback",
	        macro : "callback",
	        bindRefreshTo : [{
	            to : "cb",
	            inside : data,
	            recursive : true
	        }]
	    }/}
		<div id="exampleDiv" style="width: 100px; height: 70px; margin-left:0px; background: url(/images/logo-page.png) no-repeat; position: relative;"></div>
        <button {on click "onClick"/}>Animate</button>
	{/macro}

	{macro callback()}
	    <p>${data.cb.startQueue}</p>
		<p>${data.cb.startAnim1}</p>
		<p>${data.cb.endAnim1}</p>
		<p>${data.cb.startAnim2}</p>
		<p>${data.cb.endQueue}</p>
	{/macro}

{/Template}
