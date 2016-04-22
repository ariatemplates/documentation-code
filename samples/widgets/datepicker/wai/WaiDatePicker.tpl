{Template {
    $classpath : 'samples.widgets.datepicker.wai.WaiDatePicker'
}}

    {macro main()}

        <span id="departure-date-label" class="xSROnly">Date of departure</span>
        <span id="datepicker-explanation" class="xSROnly">Date format is Day/Month/Year, press down arrow to access the Calendar widget</span>

        {@aria:DatePicker {
            label: "Departure date",
            labelWidth: 100,
            iconTooltip: "Display calendar",
            waiAria: true,
            waiAriaCalendarLabel: "Calendar table. Use arrow keys to navigate and space to validate.",
            waiAriaDateFormat: "EEEE d MMMM yyyy",
            calendarShowShortcuts: false,
            waiDescribedBy: "datepicker-explanation",
            waiLabelledBy: "departure-date-label",
            waiLabelHidden: true
        }/}<br><br>

        {@aria:DatePicker {
            label: "Return date",
            labelWidth: 100,
            iconTooltip: "Show calendar",
            waiAria: true,
            waiAriaCalendarLabel: "Calendar table. Use arrow keys to navigate and space to validate.",
            waiAriaDateFormat: "MMMM d",
            calendarShowShortcuts: false,
            waiDescribedBy: "datepicker-explanation",
            waiLabel: "Date of return",
            waiLabelHidden: true
        }/}

    {/macro}

{/Template}
