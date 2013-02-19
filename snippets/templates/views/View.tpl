////#simpleUsage
{Template {
  $classpath: "snippets.templates.views.View",
  $hasScript: true
}}

{var hotels =
  ////#defaultData
  [{desc:"Item1", price:42},
   {desc:"Item2", price:27},
   {desc:"Item3", price:36},
   {desc:"Item4", price:40},
   {desc:"Item5", price:97},
   {desc:"Item6", price:7},
   {desc:"Item7", price:16},
   {desc:"Item8", price:11},
   {desc:"Item9", price:66}]
   ////#defaultData
/}

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

////#simpleUsage
{/macro}

{/Template}
////#simpleUsage