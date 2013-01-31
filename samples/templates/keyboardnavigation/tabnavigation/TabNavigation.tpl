{Template {
  $classpath : 'samples.templates.keyboardnavigation.tabnavigation.TabNavigation',
  $dependencies: ['aria.widgets.AriaSkinInterface']
   } }

  {macro main ( )}
    <div style = "float:left; margin:20px 20px" >


    {@aria:TextField {
      label : "First",
      tabIndex : 1 }/}

    {@aria:Button {
      label : "Third",
      tabIndex : 3,
      block : true }/}
    </div>
    <div style = "float:left; margin:20px 20px" >

    {@aria:TextField {
      label : "Second",
      tabIndex : 2 }/}
    {@aria:Button {
      label : "Fourth",
      tabIndex : 4,
      block : true }/}
    </div>
  {/macro}

{/Template}