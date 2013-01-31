
{Template {
    $classpath: "samples.widgets.sortindicator.binding.SortingTemplateBinding",
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
        {@aria:SortIndicator {
            sortName:'SortByName',
            label:"Sort Order ",
            view:aview,
            sortKeyGetter:sortByName,
            labelWidth : 70,
            bind : {
               tooltip : {
                  to : 'view:tooltip',
                  inside : data
               }
            },
            onclick : setToolTip
        }/}
    {/macro}

{/Template}