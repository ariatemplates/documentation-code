{Template {
    $classpath:"samples.widgets.rangecalendar.hover.Sample",
    $css: ["samples.widgets.rangecalendar.SampleStyle"],
    $hasScript: true
}}

    {macro main()}
        {@aria:RangeCalendar {
            onDateSelect: "calendarSelectDate",
            onmouseover: "calendarMouseOver",
            onmouseout: "calendarMouseOut",
            bind: {
                fromDate: {
                    to: "fromDateCalendar",
                    inside: data
                },
                toDate: {
                    to: "toDateCalendar",
                    inside: data
                }
            }
        }/}<br><br>
        Start date: {section {
            macro: {
                name: "dateDisplay",
                args: ["fromDate"]
            },
            bindRefreshTo: [{to: "fromDate", inside: data},{to: "activeDate", inside: data}]
        } /}
        End date: {section {
            macro: {
                name: "dateDisplay",
                args: ["toDate"]
            },
            bindRefreshTo: [{to: "toDate", inside: data},{to: "activeDate", inside: data}]
        } /}
    {/macro}

    {macro dateDisplay(fieldName)}
        {var date = data[fieldName]/}
        <span class="date ${data.activeDate == fieldName ? 'selected':''}" {on click {fn:"clickDisplayDate",args:fieldName} /}>
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