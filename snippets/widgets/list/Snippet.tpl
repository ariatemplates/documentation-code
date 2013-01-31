{Template {
    $classpath : "snippets.widgets.list.Snippet"
}}

    {macro main()}

        {var data={items:[],multipleSelect1:true,selectedValue1:0}/}

        ////#wgtListSnippet1
        {@aria:List {
            items : data.items,
            minWidth:100
        }/}
        ////#wgtListSnippet1

        ////#wgtListSnippet2
        {@aria:List {
            items : data.items,
            minWidth:100,
            displayOptions :{
                flowOrientation : "horizontal",
                listDisplay : "label",
                tableMode : false
            },
            defaultTemplate : "snippets.widgets.list.CustomTemplate"
        }/}
        ////#wgtListSnippet2

        ////#wgtListSnippet3
        {@aria:List {
            items : data.items,
            minWidth:100,
            onchange: "listOnChange"
        }/}
        ////#wgtListSnippet3

        ////#wgtListSnippet4
        {@aria:List {
            items : data.items,
            minWidth:100,
            block: true,
            bind: {
                multipleSelect: {inside: data, to: "multipleSelect1"},
                selectedValues: {inside: data, to: "selectedValue1"}
            }
        }/}
        ////#wgtListSnippet4

    {/macro}

{/Template}