{Template {
  $classpath: "samples.templates.templateScripts.clickhandler.ClickSample",
  $hasScript: true
}}

    {macro main ()}
        <div {on click { fn : clickHandler} /}> What time is it?</div>
    {/macro}

{/Template}