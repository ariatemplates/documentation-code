{Template {
  $classpath : "addressBook.templates.facebook.FacebookResults"
}}

  {macro main()}
    <div class="content-box">
      <div class="box-top center">
        {@embed:Placeholder {
          name : "title"
        }/}
      </div>
      <div class="center">
        {@embed:Placeholder {
          name : "user"
        }/}
        {@embed:Placeholder {
          name : "albums"
        }/}
      </div>
    </div>
  {/macro}

{/Template}