{Template {
    $classpath : "samples.widgets.multiselect.wai.WaiMultiselect"
}}

    {macro main()}

        <h3>This an example of multiselect</h3>
        <p>
        {@aria:MultiSelect {
            activateSort : true,
            label : "Multiselect widget",
            iconTooltip: "Press space to open the selection list",
            labelWidth : 150,
            width : 400,
            fieldDisplay : "label",
            fieldSeparator : ',',
            valueOrderedByClick : true,
            maxOptions : 3,
            numberOfColumns : 2,
            displayOptions : {
                flowOrientation : 'vertical',
                listDisplay: "label"
            },
            items : data.items
        }/}
        </p>
    {/macro}

{/Template}
