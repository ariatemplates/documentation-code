{Template {
  $classpath: "samples.widgets.iconbutton.Simple",
  $hasScript: true
}}

  {macro main()}

    <p>Sample IconButton widget </p>

    {@aria:IconButton {
      icon: "std:confirm",
      width: 150,
      onclick: buttonClick,
      block: true
    } /}
    <p>IconButton disabled</p>
    {@aria:IconButton {
      icon: "std:confirm",
      width: 150,
      disabled : true
    } /}
    {/macro}

{/Template}