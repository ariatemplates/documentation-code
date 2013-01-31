{Template {
    $classpath : 'samples.widgets.datepicker.TemplateDatePicker',
    $hasScript : false
}}

    {macro main()}

        {var minDate = new Date() /}
        {var maxDate = new Date(minDate.getFullYear()+1,minDate.getMonth(),minDate.getDate()) /}
        {var data = {calvalue:null,calvalue2:null} /}
        <p>Here is the default DatePicker:</p>
        <hr />
        <p>The dates entered in the following DatePickers must be between ${minDate|dateformat:aria.utils.environment.Date.getDateFormats().shortFormat} and ${maxDate|dateformat:aria.utils.environment.Date.getDateFormats().shortFormat}</p>
        {@aria:DatePicker {
            label: "Departure date:",
            labelWidth:150,
            width:300,
            helptext:"Type date or select",
            minValue: minDate,
            maxValue: maxDate,
            bind:{
                "value":{to:'calvalue',inside:data}
            }
        }/}
        {@aria:DatePicker {
            margins:"x x x 20",
            label: "Return date:",
            labelWidth:150,
            helptext:"Type date or select",
            width:300,
            minValue: minDate,
            maxValue: maxDate,
            bind:{
                "value":{to:'calvalue2',inside:data}
            }
        }/}
        <br/>
        {@aria:DateField {
            label:"Selected departure: ",
            width:300,
            labelWidth:150,
            minValue: minDate,
            maxValue: maxDate,
            bind:{
                "value":{to:'calvalue',inside:data}
            }
        }/}
        {@aria:DateField {
            margins:"x x x 20",
            label:"Selected return: ",
            width:300,
            readOnly: true,
            labelWidth:150,
            minValue: minDate,
            maxValue: maxDate,
            bind:{
                "value":{to:'calvalue2',inside:data}
            }
        }/}
    {/macro}

{/Template}
