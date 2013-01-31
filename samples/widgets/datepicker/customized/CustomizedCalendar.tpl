{Template {
    $classpath : "samples.widgets.datepicker.customized.CustomizedCalendar",
    $hasScript : true,
    $res : {
        "res" : "aria.widgets.calendar.CalendarRes"
    }
}}

    {var calendar=data.calendar/}
    {var settings=data.settings/}
    {var skin=data.skin/}

    {macro main()}
        {if settings.displayUnit == "M"}
            {@aria:Div {
                sclass: skin.skinObject.divsclass,
                margins: "0 0 0 0",
                block: true,
                cssClass: skin.baseCSS+"general"
            }}
                {if settings.label}
                    <div class="${skin.baseCSS}label">${settings.label}</div>
                {/if}
                {for var startIndex = calendar.startMonthIndex, endIndex = calendar.endMonthIndex, index = startIndex ; index <= endIndex ; index++}
                    <span style="display: inline-block; vertical-align: top; margin: 2px;">
                        {call renderMonth(calendar.months[index],index == startIndex, index == endIndex)/}
                    </span>
                {/for}
                <div style="text-align: center; margin: 2px;">
                    <a title="${calendar.today|dateformat:settings.completeDateLabelFormat}" tabIndex="-1" href="javascript:;" {on click {fn: "navigate", scope: moduleCtrl, args: {date:calendar.today}}/}>${res.today}</a>
                    {if settings.value}
                        &nbsp;|&nbsp; <a title="${settings.value|dateformat:settings.completeDateLabelFormat}" tabIndex="-1" href="javascript:;" {on click {fn: "navigate", scope: moduleCtrl, args: {date:settings.value}}/}>${res.selectedDay}</a>
                    {/if}
                </div>
            {/@aria:Div}
        {/if}
    {/macro}

    {macro renderMonth(month,first,last)}
        <table class="${skin.baseCSS}month" cellspacing="0" style="width: 128px;">
            <thead>
                <tr>
                    <th colspan="8">
                        <div class="${skin.baseCSS}monthTitle" style="position: relative;">
                            {if first && calendar.previousPageEnabled}
                                <div style="position: absolute; left: 0px; top: -2px; cursor: pointer;" {on click {fn: "navigate", args : { increment: -1, incrementUnit: "M" }, scope : moduleCtrl}/}>{@aria:Icon { icon: skin.skinObject.previousPageIcon }/}</div>
                            {/if}
                            {if last && calendar.nextPageEnabled}
                                <div style="position: absolute; right: 0px; top: -2px; cursor: pointer;" {on click {fn: "navigate", args : { increment: 1, incrementUnit: "M" }, scope : moduleCtrl}/}>{@aria:Icon { icon: skin.skinObject.nextPageIcon }/}</div>
                            {/if}
                            ${month.label}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody {on click clickDay/} {on mouseover mouseOverDay/} {on mouseout mouseOutDay/}>
                {if settings.showWeekNumbers}
                    <tr>
                        <td class="${skin.baseCSS}weekNumber">&nbsp;</td>
                        {foreach week inArray month.weeks}
                            <td class="${skin.baseCSS}weekNumber">{if week.overlappingDays == 0 || week.monthEnd == month.monthKey}${week.weekNumber}{else/}&nbsp;{/if}</td>
                        {/foreach}
                        <td>&nbsp;</td>
                    </tr>
                {/if}
                {foreach day inArray calendar.daysOfWeek}
                    <tr>
                        <th>${day.label}</th>
                        {foreach week inArray month.weeks}
                            {call renderDay(week.days[day_index],month)/}
                        {/foreach}
                        <td>&nbsp;</td>
                    </tr>
                {/foreach}
            </tbody>
        </table>
    {/macro}

    {macro renderDay(day, month)}
        {var jsDate=day.jsDate/}
        {if day.monthKey==month.monthKey}
            <td ${day.isSelectable ? "_date=\""+jsDate.getTime()+"\"":""}
                class="${getClassForDay(day)}"
            >${day.label}</td>
        {else/}
            <td />
        {/if}
    {/macro}
{/Template}