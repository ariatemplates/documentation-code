{Template {
    $classpath : "snippets.widgets.sortindicator.Snippet"
}}

    {macro main()}

       {var data={"view:tooltip":""}/}
       {var sortByName=function(){}/}
       {createView aview on []/}

        ////#wgtSortIndicatorSnippet1
        {@aria:SortIndicator {
            sortName:'SortByName',
            label:"Sort Order ",
            view:aview,
            sortKeyGetter: sortByName,
            labelWidth : 70,
            activateEllipsis: true,
            ellipsis: '...',
            ellipsisLocation: 'right'
        }/}
        ////#wgtSortIndicatorSnippet1

        ////#wgtSortIndicatorSnippet2
        {@aria:SortIndicator {
            sortName:'SortByName',
            label:"Sort Order ",
            view:aview,
            sortKeyGetter: sortByName,
            labelWidth : 70,
            bind : {
                tooltip : {
                    to : 'view:tooltip',
                    inside : data
                }
            },
            onclick: "setToolTip"
        }/}
        ////#wgtSortIndicatorSnippet2

    {/macro}

{/Template}