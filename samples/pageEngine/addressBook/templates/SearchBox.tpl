{Template {
  $classpath : "samples.pageEngine.addressBook.templates.SearchBox",
  $hasScript : true,
  $css : ["samples.pageEngine.addressBook.templates.SearchBoxCSS"]
}}

  {macro main()}
    
   <div class="content-box" {id "contentBox"/}>
   	<div class="box-top center">
   		<h1 class="cian">Address Book</h1>   		
   	</div>
   	
   	<div class="box-middle center">
   		<h3 class="grey">Search a contact</h3>
      {section {
        id : "searchInput",
        macro : "searchInput",
        keyMap : [{
          key : "ENTER",
          callback : {
            fn : "navigateEnter",
            scope : this
          }
        }],
        on : {
          focus : {
            fn : hasFocus,
            scope : this,
            args : true
          },
          blur : {
            fn : hasFocus,
            scope : this,
            args : false
          }
        },
        type : "div"
      }/}
   	</div>

   	<div class="box-bottom center">
   		<button {id "searchButton" /} type="button" class="search-button" {on click {fn : "searchClicked"}/}><h2 class="show">Search</h2></button>
   	</div>
   </div>

  {/macro}

  {macro searchInput()}
    {@html:TextInput {
      bind : {
        value : {
          inside : data,
          to : "query"
        }
      },
      on : {
        type : "textTyped"
      },
      attributes : {
        placeholder : "search by name/surname/office...",
        classList : ["search-input"],
        size : "34"
      }
    }/}
  {/macro}

{/Template}