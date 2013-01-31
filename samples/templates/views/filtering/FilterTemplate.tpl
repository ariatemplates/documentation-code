// This template is used in aria templates tutorial to demonstrate views.
{Template {
    $classpath: "samples.templates.views.filtering.FilterTemplate",
    $hasScript: true
}}

    {createView aview on data.vHotels/}

    {macro main()}
        ${initVariables()}
        <div class="articleList">
            {call filtering()/}
            <hr/>
            {call articleList()/}
        </div>
    {/macro}
    {macro filtering()}
        {@aria:RadioButton {
                label: "Show all articles",
                keyValue: "all",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "all"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Show no articles",
                keyValue: "none",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "none"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Only articles containing the word 'Paris'",
                keyValue: "paris",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "paris"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
        <br/>
        {@aria:RadioButton {
                label: "Only articles with price <= 100",
                keyValue: "cheap",
                onchange: {
                    fn: "onRadioChange",
                    args: {radioGroup: "1", keyValue: "cheap"}
                },
                bind:{
                    "value":{inside: data, to: 'filterGroup'}
                },
                labelPos: "right"
            }/}
    {/macro}


    {macro articleList()}
        <ul>
        {foreach a inFilteredView aview}
            <li>${a.name} (${a.price.value})</li>
        {/foreach}
        </ul>
    {/macro}

{/Template}