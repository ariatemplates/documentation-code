{Template {
  $classpath : 'samples.widgets.checkbox.styling.CheckboxStyling'} }

  {macro main ( )}
    <p><strong> Checkbox with label positioned to the right </strong></p>
    {@aria:CheckBox {
      label : "Checkbox 1",
      labelPos: "right"
    }/}
    <p><strong>Label positioned to left</strong></p>
    {@aria:CheckBox {
      label : "Checkbox 2",
      labelPos: "left"
    }/}
    <p><strong>Label positioned to top </strong></p>
    {@aria:CheckBox {
                label: "Checkbox 3",
                labelPos: "top"
        }/}
    {/macro}

{/Template}
