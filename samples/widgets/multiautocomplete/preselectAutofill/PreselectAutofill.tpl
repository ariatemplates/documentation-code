{Template {
    $classpath : "samples.widgets.multiautocomplete.preselectAutofill.PreselectAutofill",
    $hasScript : true
}}

    {macro main()}

    	{section {
    		macro : "displayMultiAutoComplete",
    		bindRefreshTo : [{
    			to : "cfg",
    			inside : data
    		}],
    		type : "div"
    	}/}

    	{section {
    		macro : "displayOptions",
    		type : "div"
    	}/}

    	{section {
    		macro : "displayData",
    		bindRefreshTo : [{
    			to : "value",
    			inside : data
    		}],
    		type : "div"
    	}/}

    {/macro}

    {macro displayMultiAutoComplete()}

        {@aria:MultiAutoComplete {
    		label : "Select a passenger",
            resourcesHandler : getLCRangeHandler(),
            preselect : data.cfg.preselect,
            freeText : data.cfg.freeText,
            autoFill : data.cfg.autoFill,
            bind : {
                value : {
                	to : "value",
                	inside : data
                }
            }
        }/}


        <span>
            <br/>
        	<strong> Hint: </strong>
    		{if data.cfg.preselect == "strict"}
    			Type "p1" (it is the code for a passenger)
    		{else/}
    			Type "p"
    		{/if}
    		or type "p1-4" for range selection
        </span>

    {/macro}

    {macro displayOptions()}

    	<hr style="margin-top: 30px;"/>
    	<div><strong>Options</strong></div>

    	{@aria:Select {
    		label : "preselect",
    		options : [{
    			label : "strict",
    			value : "strict"
    		}, {
    			label : "always",
    			value : "always"
    		}, {
    			label : "none",
    			value : "none"
    		}],
    		bind : {
    			value : {
    				to : "preselect",
    				inside : data.cfg
    			}
    		}
    	}/}

    	{@aria:CheckBox {
    		label : "freeText",
    		bind : {
    			value : {
    				to : "freeText",
    				inside : data.cfg
    			}
    		}
    	}/}

    	{@aria:CheckBox {
    		label : "autoFill",
    		bind : {
    			value : {
    				to : "autoFill",
    				inside : data.cfg
    			}
    		}
    	}/}
    {/macro}


    {macro displayData()}
    	<hr style="margin-top: 30px;"/>
    	<div><strong>Data model</strong></div>
    	<pre>${$json.convertToJsonString($json.copy(data.value), {indent : "    "})}</pre>
    {/macro}

{/Template}
