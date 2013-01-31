{Template {
    $classpath : 'samples.widgets.datepicker.customized.CustomizedDatePicker'
}}
    {macro main()}

    {var minDate = new Date()/}
    {var maxDate = new Date(minDate.getFullYear()+1,minDate.getMonth(),minDate.getDate())/}
    <p>Here is a DatePicker using a customized version of the calendar, showing days vertically.</p>
    </hr>
    {@aria:DatePicker {
        minValue: minDate,
        maxValue: maxDate,
        calendarTemplate: "samples.widgets.datepicker.customized.CustomizedCalendar"
    }/}


    {/macro}

{/Template}
