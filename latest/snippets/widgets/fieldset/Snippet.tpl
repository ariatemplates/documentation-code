{Template {
  $classpath : "ariadoc.snippets.widgets.fieldset.Snippet",
  $hasScript: true } }

  {macro main ( )}

   ////#wgtFieldsetSimple
        {@aria:Fieldset {
            label: "Sample fieldset1",
            width: 250
        }}
            <p>Some content here...</p>
        {/@aria:Fieldset}
    ////#wgtFieldsetSimple

    ////#wgtFieldsetNested
        {@aria:Fieldset {
            label: "Sample fieldset1",
            width: 350
        }}
            <p>Some content in the root fieldset</p>
            {@aria:Fieldset {
                label: "Nested Fieldset",
                width: 250
            }}
                <p>Some content in the nested Fieldset</p>
            {/@aria:Fieldset}
        {/@aria:Fieldset}
    ////#wgtFieldsetNested

    ////#wgtFieldsetAction
        {@aria:Fieldset {
            label: "Sample fieldset1",
            width: 600,
            onSubmit: fieldsetSubmit
        }}
            <p>Some content here...</p>
        {/@aria:Fieldset}
    ////#wgtFieldsetAction

    ////#wgtFieldsetBinding
        {@aria:Fieldset {
            width : 400,
            bind: {
                tooltip: {
                    to : "view:tooltip",
                    inside : data
                }
            }
         }}
            <p>Some content here...</p>
         {/@aria:Fieldset}
    ////#wgtFieldsetBinding

    {/macro}

{/Template}