{Template {
    "$classpath" : 'samples.utils.filters.delay.TemplateFilterDelay',
    "$hasScript" : false,
    "$width" : {"min" : 974}
}}

{macro main()}
    <h2>Delays in filters</h2>
    <br/>
    This is an example of using IO filters, with or without a delay. <br/>
    The IO filter with a delay can be useful when emulating BE processing in a mocked environment.
    <br/><br/>
    {@aria:CheckBox {
        label: "Enable Filter",
        labelPos: "right",
        bind:{
            "value":{inside: data, to: 'selectDisabled1',
                transform: 'aria.widgets.transform.NotTransform'
              }
        }
    }/}
    <br/><br/>
    {@aria:List {
        items:[{value:0, label:'No delay'},{value:1000, label:'1 second delay'}, {value:2000, label:'2 second delay'}, {value:3000, label:'3 second delay'}, {value:4000, label:'4 second delay'}, {value:5000, label:'5 second delay'}],
        minWidth:100,
        bind: {
            disabled: {inside: data, to: 'selectDisabled1'},
            selectedValues: {inside:data, to:"selectedValue1"}
        }
    }/}
    <br/>
    <br/><br/>
    {@aria:Button {
            id: "btnSearch",
            label: "Search",
            onclick: {
                fn: "search",
                scope: moduleCtrl
            }
    }/}
{/macro}

{/Template}
