// This template is used in aria templates tutorial to demonstrate views.
{Template {
    $classpath: "samples.templates.views.pagination.PagingTemplate",
    $hasScript: true
}}

{createView aview on data.vHotels/}

{macro main()}
    ${initVariables()}
    <div class="articleList">
        {call paging()/}
        <hr/>
        {call articleList()/}
    </div>
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