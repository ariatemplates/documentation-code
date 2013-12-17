{Template {
	$classpath : "samples.features.refresh.TemplateRefresh",
	$hasScript : true
}}

	{macro main()}

        /*
         * First refresh example
         */

        <h1>Manual refresh of a section</h1>

        {section {
            id: "manualRefresh",
            type: "div",
            macro: "counterOne"
        }/}

        {@aria:Button {
            id: "manualButton",
            margins: "10 x x x",
            label: "Call manual refresh",
            onclick: manualRefresh
        }/}

        /*
         * Second refresh example
         */

        <h1>Refresh using widget binding</h1>

        <div>
            The value of counter 2 is:
            {@aria:TextField {
                width: 30,
                bind: {
                    value: {to:"counter2", inside:data}
                }
             }/}
        </div>

        {@aria:Button {
            id: "widgetButton",
            margins: "10 x x x",
            label: "Change counter2 value",
            onclick: widgetRefresh
        }/}

        /*
         * Third refresh example
         */

        <h1>Automatic refresh using bindRefreshTo</h1>

        {section {
            id: "automaticRefresh",
            type: "div",
            bindRefreshTo: [
                { to:"counter3", inside:data }
            ],
            macro: {
		        name: "counterThree",
                args: ["hey!"]
            }
        }/}

        {@aria:Button {
            id: "automaticButton",
            margins: "10 x x x",
            label: "Change counter3 value",
            onclick: automaticRefresh
        }/}

    {/macro}

    {macro counterOne()}
        The value of counter 1 is: ${data.counter1}
    {/macro}

    {macro counterThree(msg)}
        The value of counter 3 is: ${data.counter3} / ${msg}
    {/macro}

{/Template}