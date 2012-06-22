{Template {
  $classpath : "ariadoc.snippets.widgets.datefield.Snippet"} }

  {macro main ( )}
    {var minDate = new Date(1980,0,1)/}
    {var maxDate = new Date(2025,11,25)/}

   ////#wgtDatefieldSnippet
    {@aria:DateField {
        label:"date field",
        minValue: minDate,
        maxValue: maxDate
    }/}
  ////#wgtDatefieldSnippet
  {/macro}

{/Template}