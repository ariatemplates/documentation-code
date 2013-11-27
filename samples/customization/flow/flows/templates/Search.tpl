{Template {
    $classpath:'samples.customization.flow.flows.templates.Search',
    $hasScript: true
}}
    {macro main()}
        <h1>Search</h1>
        Note: in this demo application, type a city like: Rome, Amsterdam, Tokyo.<br/><br/>
        {@aria:AutoComplete {
            label: "From",
            resourcesHandler: getHandler(),
            labelWidth: 100,
            bind: {value: {to: "from", inside: this.data.search}}
        }/}<br/>
        {@aria:AutoComplete {
            label: "To",
            resourcesHandler: getHandler(),
            labelWidth: 100 ,
            bind: {value: {to: "to", inside: this.data.search}}
        }/}<br/>
        {@aria:DatePicker {
            label: "Date",
            labelWidth: 100,
            bind: {value: {to: "date", inside: this.data.search}}
        }/}<br/>
        {@aria:Button {
            label:"Search",
            onclick: {
                fn: "getFlightAvailability",
                scope: moduleCtrl
            }
         }/}
    {/macro}
{/Template}
