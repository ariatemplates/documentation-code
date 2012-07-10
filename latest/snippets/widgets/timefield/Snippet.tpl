{Template {
    $classpath : "snippets.widgets.timefield.Snippet"
}}

    {macro main()}

        ////#wgtTimeField
        {@aria:TimeField {
            label : "Departure time (short format: hh:mm):",
            block : true,
            pattern : aria.utils.environment.Date.getTimeFormats().shortFormat
        }/}
        ////#wgtTimeField

    {/macro}

{/Template}
