{Template {
    $classpath:'ariadoc.guides.treeview.view.Main',
    $hasScript: true,
    $css: ['ariadoc.guides.treeview.view.MainStyle']
}}
  {var count=0/}

  {macro main()}
    {@aria:Link {
      label:"Load Data",
      onclick:{
        fn:"loadData"
      }
    }/}
    {call treeview()/}

  {/macro}

  {macro treeview()}
    <div class="mainMenu">
    {section {
        id:"treeviewSection",
        bindRefreshTo: [{to:"menu", inside:data, recursive:false}]
    }}
          {if !data.menu}
            [no data]
          {else/}
            {call tv2_array(data.menu.menus)/}
          {/if}
    {/section}
    </div>
  {/macro}

  /**
   * tv2: list with expand/collapse links
   */
  {macro tv2(mnu)}
    {if !mnu.menus}
        // no sub-menu
        <li class="tv">${mnu.text}</li>
    {else/}
        // this menu has sub menus

        {section {
            id:"treeviewSection"+mnu.id,
            type:"LI",
            cssClass:"tv",
            bindRefreshTo: [{to:"data:expanded", inside:mnu}]
        }}
            // process css class
            {var cls=(mnu["data:expanded"]==true)?"tvOpen" : "tvClosed"/}
            <span class="tvIcon ${cls}" {on click {fn:"toggleMenu",args:mnu}/}>
                &nbsp;
                ${mnu.text}
            </span>
            {if mnu["data:expanded"]}
                {call tv2_array(mnu.menus)/}
            {/if}
        {/section}
    {/if}
  {/macro}

  {macro tv2_array(mnuArray)}
    {if mnuArray}
    <ul>
        {foreach submenu inArray mnuArray}
           {call tv2(submenu)/}
        {/foreach}
    </ul>
    {/if}
  {/macro}


{/Template}

