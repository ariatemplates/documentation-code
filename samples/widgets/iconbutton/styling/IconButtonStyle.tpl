{Template {
  $classpath: "samples.widgets.iconbutton.styling.IconButtonStyle"
}}

  {macro main()}
    <p>Here is an example of an IconButton using an external image as icon. It uses the <code>srcImage</code> configuration attribute</p>
    <br />
    {@aria:IconButton {
      sourceImage:{path:"http://www.xerox.com/assets/images/navigation/next-steps-icons/social-media-icons/facebook-icon.png"},
      label:"Facebook"
    } /}

    <p>IconButton widget with icon set</p>

    <p>Using the <code>std:confirm</code> icon</p>
    <br />
    {@aria:IconButton {
      icon: "std:confirm",
      block: true
    } /}

    <p>Using the <code>std:hand_bag</code> icon</p>
    <br />
    {@aria:IconButton {
      icon: "std:hand_bag",
      margins: "20 x x x",
      block: true
    } /}

    <p>Using the <code>std:save</code> icon</p>
    <br />
    {@aria:IconButton {
      icon: "std:save",
      margins: "20 x x x",
      block: true
    } /}

    <p>Using the <code>std:info</code> icon</p>
    <br />
    {@aria:IconButton {
      icon: "std:info",
      margins: "20 x x x",
      block: true
    } /}

    <br />
    {@aria:IconButton {
      icon: "sortIndicator:si_ascending",
      block: true,
      margins: "20 x x x"
    } /}
    {/macro}

{/Template}