{Template {
  $classpath : "samples.pageEngine.addressBook.templates.ResultsBox",
  $css : ["samples.pageEngine.addressBook.templates.ResultsBoxCSS", "samples.pageEngine.addressBook.templates.ContactsCSS"],
  $macrolibs : {
    "contactsLib" : "samples.pageEngine.addressBook.templates.ContactLibrary"
  }
}}

  {macro main(left)}
    
   <div class="content-box" {if left}style="left: ${left};"{/if}>
   	<div class="box-top center">
   		<h1 class="cian">Address Book</h1>   		
   	</div>
   	
   	<div class="box-middle center">
   		<h3 class="grey">Results</h3>
      {call contactsLib.printContactsTable(data.results, moduleCtrl)/}
   	</div>

   	<div class="box-bottom center">
   		<button type="button" class="search-button" {on click {fn : moduleCtrl.newSearch, scope : moduleCtrl}/}><h2>New Search</h2></button>
   	</div>
   </div>

  {/macro}

{/Template}