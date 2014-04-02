{Template {
    $classpath:'samples.customization.flow.flows.templates.Main',
    $hasScript:true,
    $dependencies : ['samples.common.autocomplete.AutoCompleteResourceHandler'],
    $templates: ['samples.customization.flow.flows.templates.Search']
}}

    {macro main()}
        {call navigationLink("search","Search")/}&nbsp;|&nbsp;
        {call navigationLink("avail","Availability")/}&nbsp;|&nbsp;
        {call navigationLink("info","Flight information")/}
        <hr/>
        {var flowData = data['flow:data']/}

        {if flowData.currentState == "search" || (flowData.showAllTemplates && flowData.showSearch) }
            {@aria:Template {
                defaultTemplate: "samples.customization.flow.flows.templates.Search"
            }/}
            <br/><br/><br/>
        {/if}

        {if flowData.currentState == "avail" || (flowData.showAllTemplates && flowData.showAvail) }
            {@aria:Template {
                defaultTemplate: "samples.customization.flow.flows.templates.Avail"
            }/}
            <br/><br/><br/>
        {/if}

        {if flowData.currentState == "info" || (flowData.showAllTemplates && flowData.showAvail)}
            {@aria:Template {
                defaultTemplate: "samples.customization.flow.flows.templates.Info"
            }/}
            <br/><br/><br/>
        {/if}
        <hr/>
    {/macro}

    {macro navigationLink(stateName, label)}
        {var flowData = data['flow:data']/}
        {if flowData.transitionStates[stateName]}
            {@aria:Link {label:label, onclick: {
                fn: "navigate",
                args: stateName
            }}/}
        {else/}
            {var curState=(flowData.currentState == stateName)/}
            {if curState}<b>{/if}${label}{if curState}</b>{/if}
        {/if}
    {/macro}

{/Template}
