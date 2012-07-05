{Template {
    $classpath : 'samples.templates.domInteractions.processingIndicator.Sample',
    $hasScript : true,
    $css : ["samples.templates.domInteractions.processingIndicator.SampleCSS"]
}}
    {macro main()}
        <div class="myMenu">
            <span class="myMenuItem">
                <span class="half colorOne"
                    {on click { fn : setProcessing, args : {id : "mySpan", value : true, label : "Loding span content..."}} /}
                >Start</span>
                <span class="half colorOne"
                    {on click { fn : setProcessing, args : {id : "mySpan", value : false}} /}
                >Stop</span>
            </span>
            <span class="myMenuItem">
                <span class="half colorTwo"
                    {on click { fn : setProcessing, args : {id : "myFirstSection", value : true, label : "Loding section content..."}} /}
                >Start</span>
                <span class="half colorTwo"
                    {on click { fn : setProcessing, args : {id : "myFirstSection", value : false}} /}
                >Stop</span>
            </span>
            <span class="myMenuItem">
                <span class="whole colorThree"
                    {on click { fn : toggleProcessing} /}
                >Toggle</span>
            </span>
            <span class="myMenuItem">
                <span class="whole colorFour"
                    {on click { fn : wholePage} /}
                >Whole page</span>
            </span>
            <span class="myMenuItem">
                <span class="whole colorFive"
                    {on click { fn : refresh} /}
                >Refresh</span>
            </span>
        </div>
        <div class="myContent">
            <span class="colorOne" {id "mySpan" /}>&nbsp;</span>
            {section {
              id : "myFirstSection",
              macro : "mySectionMacro",
              type : "SPAN",
              cssClass : "colorTwo"
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
              cssClass : "colorThree"
            } /}
        </div>
    {/macro}

    {macro mySectionMacro ()}
	   &nbsp;
    {/macro}


{/Template}