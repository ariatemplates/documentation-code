{Template {
  $classpath : "samples.pageEngine.addressBook.templates.facebook.FacebookUser",
  $hasScript : false,
  $css : ["samples.pageEngine.addressBook.templates.facebook.FacebookUserCSS"]
}}

  {macro main()}
    {section {
      id : "fb_user",
      macro : "displayUserInfo",
      bindRefreshTo : [{
        to : "info",
        inside : data
      }],
      bindProcessingTo : {
        to : "loading",
        inside : data
      },
      attributes : {
        classList : ["fb-user-container"]
      },
      type : "div"
    }/}
  {/macro}

  {macro displayUserInfo()}
  
    {var contact = data ? data.info : null /}
    {if contact}
      <div class="fb-user-picture">
        {if contact.picture}
          <img src="${contact.picture.data.url}">
        {/if}
      </div>
      <div class="fb-user-info">
        {if contact.name}
          <h2>${contact.name}</h1>
        {/if}
        {if contact.link}
          <a href="${contact.link}" target="_blank">Visit Facebook page</a>
        {/if}
      </div>
    {else/}
      {if !data.loading}
        {@embed:Placeholder {
          name : "noUser"
        }/}
      {/if}
    {/if}
  {/macro}

{/Template}
