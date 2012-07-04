{Template {
    $classpath : "samples.widgets.dialog.movable.TemplateMovableDialog",
    $hasScript : true
}}


    {macro main()}

        {call movableOptions() /}

        {section {
            id : "dialogSection",
            macro : "dialogContainerMacro",
            bindRefreshTo : [{
                to : "movableProxy",
                inside : data["view:Dialog"],
                recursive : false
            }]
        }/}

        {section {
            id : "output_cfg",
            macro : "displayCfg",
            bindRefreshTo : [{
                to : "outputCfg",
                inside : data["view:Dialog"],
                recursive : false
            }]
        }/}

    {/macro}

    {macro dialogContainerMacro()}
        {var dataModel = data["view:Dialog"] /}
        {@aria:Dialog {
            id : "movableDialog",
            contentMacro : {
                name : "displayDialogContent"
            },
            movable : true,
            ondragstart : {
                fn : onDragStart,
                scope : this
            },
            ondragend : {
                fn : onDragEnd,
                scope : this
            },
            movableProxy : dataModel.movableProxy,
            width : 500,
            height : 250,
            bind : {
                visible : {
                    to : "visible",
                    inside : dataModel
                },
                xpos : {
                    to : "xpos",
                    inside : dataModel
                },
                ypos : {
                    to : "ypos",
                    inside : dataModel
                },
                center : {
                    to : "center",
                    inside : dataModel
                }
            }
        }/}
    {/macro}


    {macro movableOptions()}
        {var dataModel = data["view:Dialog"] /}
        <div>
        {@aria:Select {
            id : "proxy_selection",
            label : "Select the movable proxy",
            options : dataModel.proxyOptions,
            bind : {
                value : {
                    to : "selectedProxy",
                    inside : dataModel
                }
            }
        }/}
        </div>
        {section {
            id : "opacity",
            macro : "opacitySelection",
            bindRefreshTo : [{
                to : "selectedProxy",
                inside : data["view:Dialog"]
            }],
            type : "DIV"
        }/}
        <div>
            {@aria:Button {
                label : "Toggle display",
                onclick : toggleDisplay
            }/}
        </div>

    {/macro}


    {macro opacitySelection ()}
        {var dataModel = data["view:Dialog"] /}
        {if dataModel.selectedProxy === "2"}
            {@aria:NumberField {
                id : "opacity_field",
                label : "Choose the opacity",
                bind : {
                    value : {
                        to : "opacity",
                        inside : dataModel
                    }
                }
            }/}
        {/if}
    {/macro}

    {macro displayCfg ()}
        <pre style="margin-top: 20px; display: block;">${data["view:Dialog"].outputCfg}</pre>
    {/macro}

    {macro displayDialogContent()}
        {var dataModel = data["view:Dialog"] /}
        <div>
            {@aria:Text {
                bind : {
                    text : {
                        to : "draggingText",
                        inside : dataModel
                    }
                }
            }/}
        </div>
        <div>
            {@aria:NumberField {
                id : "xpos",
                label : "xpos",
                bind : {
                    value : {
                        to : "xpos",
                        inside : dataModel
                    }
                }
            }/}
            {@aria:NumberField {
                id : "ypos",
                label : "ypos",
                bind : {
                    value : {
                        to : "ypos",
                        inside : dataModel
                    }
                }
            }/}
        </div>
        <div>
            {@aria:CheckBox {
                id : "center",
                label : "center",
                bind : {
                    value : {
                        to : "center",
                        inside : dataModel
                    }
                }
            }/}
        </div>
        {section {
            id : "loading",
            bindProcessingTo : {
                to : "processing",
                inside : dataModel
            },
            macro : "justAMacro",
            type : "DIV"
        } /}
    {/macro}

    {macro justAMacro()}
        <div style="width:100px; height: 100px; margin: 10px;">Loading section</div>
    {/macro}

{/Template}