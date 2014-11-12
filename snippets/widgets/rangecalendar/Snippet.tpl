{Template {
    $classpath: "snippets.widgets.rangecalendar.Snippet",
    $hasScript: true
}}


    {macro main()}

        ////#rangecalendar
        {@aria:RangeCalendar {
            label: "Aria Templates Range Calendar",
            numberOfUnits: 1,
            bind: {
                "fromDate": {
                    to: "fromDate",
                    inside: data
                },
                "toDate": {
                    to: "toDate",
                    inside: data
                }
            }
        }/}
        ////#rangecalendar

        ////#onDateSelect
        {@aria:RangeCalendar {
            // ...
            onDateSelect: onDateSelectHandler
        }/}
        ////#onDateSelect
    {/macro}

{/Template}