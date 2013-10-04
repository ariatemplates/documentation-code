{Template {
  $classpath : "samples.pageEngine.addressBook.templates.facebook.FacebookResults",
  $hasScript : false,
  $css : ["samples.pageEngine.addressBook.templates.ResultsBoxCSS"]
}}

  {macro main()}
   <div class="content-box" style="width: 700px; min-height: 200px; left: 60%; padding-bottom: 30px;">
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