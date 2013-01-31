{Template {
    $classpath : "samples.widgets.dialog.resizable.TemplateResizableDialog",
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
            resizable : true,
            beforeresize : {
                fn : onResizeStart,
                scope : this
            },
            resizeend : {
                fn : onResizeEnd,
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
            {@aria:Button {
                label : "Toggle display",
                onclick : toggleDisplay
            }/}
        </div>

    {/macro}


    {macro displayCfg ()}
        <pre style="margin-top: 20px; display: block;">${data["view:Dialog"].outputCfg}</pre>
    {/macro}

    {macro displayDialogContent()}
        {var dataModel = data["view:Dialog"] /}
        
      {section {
            id : "resizeText",
            macro : "resizeContentMacro",
            bindRefreshTo : [{
                to : "resizetext",
                inside : data["view:Dialog"],
                recursive : false
            }]
        }/}
        
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
        <div style="height: 100px; margin: 10px;color:blue;">You can resize me by dragging any of the corners.</div>
    {/macro}
   
    {macro resizeContentMacro()}
        <div style="margin: 10px;color:green">${data["view:Dialog"].resizetext}</div>
    {/macro}
   
 {/Template}