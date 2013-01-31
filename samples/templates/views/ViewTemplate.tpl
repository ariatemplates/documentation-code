// This template is used in aria templates tutorial to demonstrate views.
{Template {
    $classpath: "samples.templates.views.ViewTemplate",
    $hasScript: true
}}

{createView aview on data.vHotels/}

{macro main()}
    ${initVariables()}
    <div class="articleList">
        {call sortState()/}
        <hr/>
        {call filtering()/}
        <hr/>
        {call paging()/}
        <hr/>
        {call articleList()/}
    </div>
{/macro}

{macro sortState()}
    Sort Order:
    <a {on click toggleSort/} title="Click to change sort order">
        {if aview.sortOrder==aview.SORT_INITIAL}
            Initial Order
        {elseif aview.sortOrder==aview.SORT_ASCENDING/}
            Ascending
        {else/}
            Descending
        {/if}
    </a>
{/macro}

{macro filtering()}
        {@aria:RadioButton {
                label: "Show all articles",
                keyValue: "all",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "all"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Show no articles",
                keyValue: "none",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "none"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Only articles containing the word 'Paris'",
                keyValue: "paris",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "paris"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Only articles with price <= 100",
                keyValue: "cheap",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "cheap"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
{/macro}

{macro paging()}
        {foreach page in aview.pages}
            {separator}&nbsp;|&nbsp;{/separator}
            <a {on click {fn: showPage, args: page.pageIndex}/}>
                {if page.pageIndex==aview.currentPageIndex}
                    <span style="font-weight:bold">
                {/if}
                ${page.firstItemNumber}-${page.lastItemNumber}
                {if page.pageIndex==aview.currentPageIndex}
                    </span>
                {/if}
            </a>
        {/foreach}
{/macro}



{macro articleList()}
    <ul>
    {foreach a inView aview}
        <li>${a.name} (${a.price.value})</li>
    {/foreach}
    </ul>
{/macro}

{/Template}