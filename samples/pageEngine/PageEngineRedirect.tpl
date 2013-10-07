{Template {
    $classpath : "samples.pageEngine.PageEngineRedirect"
}}

  {macro main ()}
  		{var href = window.location.href.replace('samples', 'code')/}
        <div>Check out the sample application base on the page engine: <a href="${href}/addressBook/index.html" target="_blank">addressBook</a>.</div>
	{/macro}

{/Template}