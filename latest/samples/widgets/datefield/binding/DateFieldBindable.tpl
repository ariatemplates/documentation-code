{Template {
  $classpath : 'samples.widgets.datefield.binding.DateFieldBindable',
  $hasScript : false } }

  {macro main ( )}
    <p> Both DateField widgets are bound to same property in the data model, so setting date in one dateField also sets date in the other dateField.</p>
    {@aria:DateField {
      label : "DateField 1",
      labelPos : "left",
      labelAlign : "right",
      helptext : "Enter date 1",
      width : 250,
      bind : {
        "value" : { inside : data,
          to : 'refDate' }
      }
    }/}

    </br>
    {@aria:DateField {
      label : "DateField 2",
      labelPos : "left",
      labelAlign : "right",
      helptext : "Enter date 2",
      width : 250,
      bind : {
        "value" : { inside : data,
          to : 'refDate' }
      }
    }/}

  {/macro}

{/Template}