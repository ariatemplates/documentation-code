{Template {
  $classpath : "samples.pageEngine.addressBook.templates.facebook.FacebookAlbums",
  $hasScript : false,
  $css : ["samples.pageEngine.addressBook.templates.facebook.FacebookAlbumsCSS"]
}}

  {macro main()}
    {section {
      id : "fb_user",
      macro : "displayUserPhotos",
      bindRefreshTo : [{
        to : "info",
        inside : data
      }, {
        to : "loading",
        inside : data
      }],
      bindProcessingTo : {
        to : "loading",
        inside : data
      },
      attributes : {
        classList : ["fb-photo-container"],
      },
      type : "div",
      processingLabel : "Retrieving photos..."
    }/}
  {/macro}

  {macro displayUserPhotos()}
    {var photos = data.info ? data.info.data : null/}
    {if photos}
      {for var i = 0; i < photos.length; i++}
        <div class="fb-photo {if (i+1)%3 === 0}last{/if}" >
          <img src="${photos[i].source}" width="157">
        </div>
      {/for}
    {else/}
      {if !data.loading}
        {@embed:Placeholder {
          name : "noPhotos"
        }/}
      {/if}
    {/if}
  {/macro}


{/Template}