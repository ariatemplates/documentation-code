{Template {
  $classpath : "samples.pageEngine.addressBook.templates.MainLayout",
  $hasScript : true,
  $css : ["samples.pageEngine.addressBook.templates.HomeBodyCSS", "samples.pageEngine.addressBook.templates.MenuCSS"]
}}

  {macro main()}
    {section {
      id : "menu",
      macro : "displayMenu",
      bindRefreshTo : [{
        to : "menuOpen",
        inside : data["view:data"]
      }]
    }/}
   <div class="container">
    {@embed:Placeholder {
      name : "left"
    }/}
   	{@embed:Placeholder {
    	name : "applicationBox"
    }/}
  </div>
  {/macro}

  {macro displayMenu()}
    <div class="menu-container">
      {var visible = data["view:data"].menuOpen /}
      <div class="menu-toggle" {on click toggleMenu /}>
        {if visible}<{else/}>{/if}
      </div>
      {if visible}
        {var storage = data.storage /}
        {var menu = storage.appData.navigation.main_menu /}
        {foreach item inArray menu}
          <div class="menu-item {if storage.pageInfo.pageId == item.pageId}active{/if}"
            {on click {
              fn : moduleCtrl.navigate,
              scope : moduleCtrl,
              args : {
                pageId : item.pageId
              },
              resIndex : -1
            }/}>
            ${item.title}
          </div>
        {/foreach}
      {/if}
    </div>
  {/macro}

{/Template}