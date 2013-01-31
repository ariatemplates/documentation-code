{Template {
    $classpath: "snippets.modules.subcontrollers.MyMainView"
}}

    {macro main()}
		{var nbCounters = data.counters.length/}
		{for var i = 0; i < nbCounters; i++}
			{@aria:Template {
				defaultTemplate : "snippets.modules.controller.MyView",
				data : data.counters[i] // equivalent to moduleCtrl : moduleCtrl.counters[i]
			}/}
  		{/for}
    {/macro}

{/Template}