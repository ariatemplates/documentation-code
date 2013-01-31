{Template {
  $classpath : 'samples.widgets.checkbox.SimpleCheckbox',
  $hasScript : true } }

  {macro main ( )}
    <h2> Simple checkbox widget with 'onchange' event attached to it </h2>
    {@aria:CheckBox {
      label : "Checkbox Label",
      onchange : {
        fn : "onchange",
        args : "Sample argument" }
    }/}
  {/macro}

{/Template}
