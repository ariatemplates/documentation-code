{Template {
    $classpath : "samples.widgets.autocomplete.preselectAutofill.PreselectAutofill",
    $hasScript : true
}}

    {macro main()}

    	{section {
    		macro : "displayAutoComplete",
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

    {macro displayAutoComplete()}

        {@aria:AutoComplete {
    		label : "Select a country",
            resourcesHandler : getNationsHandler(),
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
    			Type "si", it is the code for Slovenia
    		{else/}
    			Type "s"
    		{/if}
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
