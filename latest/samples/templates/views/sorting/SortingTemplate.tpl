// This template is used in aria templates tutorial to demonstrate views.
{Template {
    $classpath: "samples.templates.views.sorting.SortingTemplate",
    $hasScript: true
}}

    {createView aview on data.vHotels/}

    {macro main()}
        <div class="articleList">
            {call sortState()/}
            <hr/>
            {call articleList()/}
        </div>
    {/macro}

    {macro articleList()}
        <ul>
        {foreach a inSortedView aview}
            <li>${a.name} (${a.price.value})</li>
        {/foreach}
        </ul>
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

{/Template}