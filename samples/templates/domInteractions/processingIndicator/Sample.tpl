{Template {
    $classpath : 'samples.templates.domInteractions.processingIndicator.Sample',
    $hasScript : true,
    $css : ["samples.templates.domInteractions.processingIndicator.SampleCSS"]
}}
    {macro main()}
        <div class="myMenu">
            <span class="myMenuItem">
                <button class="half colorOne"
                    {on click { fn : setProcessing, args : {id : "mySpan", value : true, label : "Loding span content..."}} /}
                >Start indicator in span</button>
                <button alt="Stop indicator in first region" class="half colorOne"
                    {on click { fn : setProcessing, args : {id : "mySpan", value : false}} /}
                >Stop indicator in span</button>
            </span>
            <span class="myMenuItem">
                <button class="half colorTwo"
                    {on click { fn : setProcessing, args : {id : "myFirstSection", value : true, label : "Loding section content..."}} /}
                >Start indicator in section</button>
                <button class="half colorTwo"
                    {on click { fn : setProcessing, args : {id : "myFirstSection", value : false}} /}
                >Stop indicator in section</button>
            </span>
            <span class="myMenuItem">
                <button class="whole colorThree"
                    {on click { fn : toggleProcessing} /}
                >Toggle indicator in section</button>
            </span>
            <span class="myMenuItem">
                <button class="whole colorFour"
                    {on click { fn : wholePage} /}
                >Activate whole page indicator</button>
            </span>
            <span class="myMenuItem">
                <button class="whole colorFive"
                    {on click { fn : refresh} /}
                >Refresh</button>
            </span>
        </div>
        <div class="myContent">
            <span class="colorOne" {id "mySpan" /}>&nbsp;</span>
            {section {
              id : "myFirstSection",
              macro : "mySectionMacro",
              type : "SPAN",
              attributes : {
                classList : ["colorTwo"]
              }
            } /}
            {section {
              id : "mySecondSection",
              macro : "mySectionMacro",
              bindProcessingTo : {
                to : "loading",
                inside : data
              },
              processingLabel : "This section is loading...",
              type : "SPAN",
              attributes : {
                classList : ["colorThree"]
              }
            } /}
        </div>
    {/macro}

    {macro mySectionMacro ()}
	   &nbsp;
    {/macro}


{/Template}
