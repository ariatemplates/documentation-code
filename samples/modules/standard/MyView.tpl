{Template {
    $classpath: "samples.modules.standard.MyView"
}}

    {macro main()}
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

   		<button{on click {
   			fn : "incrementCount",
   			scope : moduleCtrl
   		}/}>increment value</button>

    {/macro}

{/Template}