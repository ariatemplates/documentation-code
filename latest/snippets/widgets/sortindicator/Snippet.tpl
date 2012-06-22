{Template {
  $classpath : "ariadoc.snippets.widgets.sortindicator.Snippet",
  $hasScript: true } }

  {macro main ( )}

   ////#wgtSortIndicatorSnippet1
        {@aria:SortIndicator {
            sortName:'SortByName',
            label:"Sort Order ",
            view:aview,
            sortKeyGetter:sortByName,
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
            sortKeyGetter:sortByName,
            labelWidth : 70,
            bind : {
               value : {
                  to : 'view:tooltip',
                  inside : data
               }
            },
            onclick : setToolTip
        }/}
    ////#wgtSortIndicatorSnippet2
    {/macro}

{/Template}