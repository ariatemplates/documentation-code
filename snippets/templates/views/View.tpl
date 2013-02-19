////#simpleUsage
{Template {
  $classpath: "snippets.templates.views.View",
  $hasScript: true
}}

////#createView
{createView vHotel on data.hotels /}
////#createView

{macro main()}
  ////#initView
  ${initView()}
  ////#initView

////#simpleUsage

  ////#inView
  {foreach htl inView vHotels}
    ${htl.name} (${htl.price})
  {/foreach}
  ////#inView
{/macro}

{macro inFilteredView()}
  ////#inFilteredView
  {foreach htl inFilteredView vHotels}
    ${htl.name} (${htl.price})
  {/foreach}
  ////#inFilteredView
{/macro}

{macro inSortedView()}
  ////#inSortedView
  {foreach htl inSortedView vHotels}
    ${htl.name} (${htl.price})
  {/foreach}
  ////#inSortedView
{/macro}

////#simpleUsage
{/Template}
////#simpleUsage