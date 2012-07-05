{Template {
    $classpath: "snippets.modules.controller.MyView"
}}

    {macro main()}

   		////#display
		{section {
			id : 'mySection',
			type : 'div',
			bindRefreshTo : [{
				to : "count",
				inside : data
			}]
		}}
   			Count : ${data.count}
   		{/section}
   		////#display

   		////#button
   		<button{on click {
   			fn : "incrementCount",
   			scope : moduleCtrl
   		}/}>increment value</button>
   		////#button

    {/macro}

{/Template}