{Template {
  $classpath: "samples.widgets.button.action.Action",
  $hasScript : true
}}

  {var counter = 0 /}

  {macro main()}

    {@aria:Button {
      label : "Click Me!",
      onclick : {
        fn : buttonClick
      }
    }/}

    <br /><br />

    {@aria:Button {
      label : "Click Me Too!",
      onclick : {
        fn : countClicks,
        args : {
          times : counter
        }
      }
    }/}

  {/macro}

{/Template}