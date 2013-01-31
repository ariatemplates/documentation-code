{Template {
    $classpath : "snippets.widgets.datefield.Snippet"
}}

    {macro main()}
        {var minDate = new Date(1980,0,1)/}
        {var maxDate = new Date(2025,11,25)/}

        ////#wgtDatefieldSnippet
        {@aria:DateField {
            label:"Enter a date:",
            minValue: minDate,
            maxValue: maxDate
        }/}
        ////#wgtDatefieldSnippet
    {/macro}

{/Template}