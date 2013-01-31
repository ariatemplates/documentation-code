{Template {
  $classpath : 'samples.widgets.div.DivWgtSample',
  $hasScript : false } }

  {macro main ( )}

      {@aria:Div {
        sclass : "basic",
        width : 200,
        height : 200,
        bind: {
            tooltip: {
                to : "view:tooltip",
                inside : data
            }
        } }}
  <h1>Sample div</h1>
{/@aria:Div}


  {/macro}

{/Template}
