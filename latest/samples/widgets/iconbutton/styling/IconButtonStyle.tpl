{Template {
  $classpath: "samples.widgets.iconbutton.styling.IconButtonStyle"
}}

  {macro main()}

    <p>IconButton widget with icon set</p>
    {@aria:IconButton {
      icon: "std:confirm",
      block: true
    } /}
    {@aria:IconButton {
      icon: "checkBoxes:cb_normalSelected",
      margins: "20 x x x",
      block: true
    } /}
    {@aria:IconButton {
      icon: "checkBoxes:disabledSelected",
      block: true,
      margins: "20 x x x"
    } /}
    {@aria:IconButton {
      icon: "dropdown:selectbox_focused",
      margins: "20 x x x"
    } /}
    {@aria:IconButton {
      icon: "dropdown:datepicker_focused",
      block: true,
      margins: "20 x x x"
    } /}
    {@aria:IconButton {
      icon: "sortIndicator:si_ascending",
      block: true,
      margins: "20 x x x"
    } /}
    {/macro}

{/Template}