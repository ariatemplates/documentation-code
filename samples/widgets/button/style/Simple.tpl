{Template {
  $classpath: "samples.widgets.button.style.Simple"
}}

  {macro main()}

    {@aria:Button {
      label : "Normal"
    }/}

    <br /><br />

    {@aria:Button {
      label : "Disabled",
      disabled : true
    }/}

    <br /><br />

    {@aria:Button {
      label : "Important",
      sclass : "important"
    }/}

    <br /><br />

    {@aria:Button {
      label : "Tall",
      height : 50
    }/}

    <br /><br />

    {@aria:Button {
      label : "Large",
      width : 130
    }/}

    <br /><br />

    {@aria:Button {
      label : "Right margin",
      margins : "x x x 60"
    }/}

    <br /><br />

    {@aria:Button {
      label : "Tooltip",
      tooltip : "This button has a tooltip!"
    }/}

  {/macro}

{/Template}