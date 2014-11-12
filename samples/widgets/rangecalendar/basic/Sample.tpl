{Template {
    $classpath:"samples.widgets.rangecalendar.basic.Sample",
    $css: ["samples.widgets.rangecalendar.SampleStyle"]
}}

    {macro main()}
        {@aria:RangeCalendar {
            id: "calendar",
            bind: {
                fromDate: {
                    to: "fromDate",
                    inside: data
                },
                toDate: {
                    to: "toDate",
                    inside: data
                }
            }
        }/}<br><br>
        Start date: {section {
            macro: {
                name: "dateDisplay",
                args: ["fromDate"]
            },
            bindRefreshTo: [{to: "fromDate", inside: data}]
        } /}
        End date: {section {
            macro: {
                name: "dateDisplay",
                args: ["toDate"]
            },
            bindRefreshTo: [{to: "toDate", inside: data}]
        } /}
    {/macro}

    {macro dateDisplay(fieldName)}
        {var date = data[fieldName]/}
        <span class="date selected">
           {if date}
           <span class="day">${date|dateFormat:"d"}</span>
           <div>
           <span class="weekday">${date|dateFormat:"EEEE"|capitalize}</span>
           <span class="month">${date|dateFormat:"MMM"|capitalize}</span>
           <span class="year">${date|dateFormat:"yy"}</span>
           </div>
           {/if}
        </span>
    {/macro}


{/Template}