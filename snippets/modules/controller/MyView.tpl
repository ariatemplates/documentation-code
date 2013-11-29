{Template {
    $classpath: "snippets.modules.controller.MyView"
}}

    {macro main()}

   		////#display
		{section {
			id : 'mySection',
      macro : 'macroContent',
			type : 'div',
			bindRefreshTo : [{
				to : "count",
				inside : data
			}]
		}/}

   		////#display

   		////#button
   		<button{on click {
   			fn : "incrementCount",
   			scope : moduleCtrl
   		}/}>increment value</button>
   		////#button

    {/macro}

    {macro macroContent()}
      Count : ${data.count}
    {/macro}

{/Template}
