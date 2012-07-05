{Template {
  $classpath: "samples.widgets.iconbutton.binding.IconButtonBinding",
  $hasScript: true
}}

  {macro main()}

    {@aria:CheckBox {
        label: "Enable IconButton",
        labelPos: "right",
        bind:{
            value:{inside: data, to: 'enableButton'}
        }
    }/}
    <p>IconButton event will be fired only when the button is in the enabled state</p>
    {@aria:IconButton {
      icon: "std:confirm",
      bind:{
          disabled : { inside : data,
            to : 'enableButton',
            transform : 'aria.widgets.transform.NotTransform' }
      },
      onclick: buttonClick
    } /}
    {/macro}

{/Template}