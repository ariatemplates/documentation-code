{Template {
    $classpath : "samples.widgets.autocomplete.http.Http",
    $hasScript: true
} }

    {macro main()}
        <div style="margin:10px;">
            {@aria:AutoComplete {
                label: "Find article in Wikipedia",
                width: 200,
                resourcesHandler: resHandler,
                bind: {
                    value: {
                        to: "value",
                        inside: data
                    }
                }
            }/}
            {section {
                macro: "displayValue",
                bindRefreshTo: [{
                    to: "value",
                    inside: data
                }]
            }/}
        </div>
    {/macro}

    {macro displayValue()}
        {if data.value && data.value.url}
            <div style="padding-top: 10px;">
                <a target="_blank" href="${data.value.url}">${data.value.title}</a> ${data.value.description}<br><br>
                <iframe src="${data.value.url}" style="width:1000px;height:500px;border:1px solid black;">
            </div>
        {/if}
    {/macro}

{/Template}
