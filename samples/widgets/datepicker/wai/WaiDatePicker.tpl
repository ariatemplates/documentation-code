{Template {
    $classpath : 'samples.widgets.datepicker.wai.WaiDatePicker'
}}

    {macro main()}

        {@aria:DatePicker {
            label: "Departure date",
            labelWidth: 100,
            iconTooltip: "Display calendar",
            waiAria: true,
            waiAriaCalendarLabel: "Calendar table. Use arrow keys to navigate and space to validate.",
            waiAriaDateFormat: "EEEE d MMMM yyyy",
            calendarShowShortcuts: false
        }/}<br><br>

        {@aria:DatePicker {
            label: "Return date",
            labelWidth: 100,
            iconTooltip: "Show calendar",
            waiAria: true,
            waiAriaCalendarLabel: "Calendar table. Use arrow keys to navigate and space to validate.",
            waiAriaDateFormat: "MMMM d",
            calendarShowShortcuts: false
        }/}

    {/macro}

{/Template}
