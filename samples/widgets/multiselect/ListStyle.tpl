{Template {
  $classpath: "samples.widgets.list.ListStyle"
}}

  {macro main()}


        <p>Sample List widget with flowOrientation vertical, works only with custom template as there is no implementation for flowOrientation in default Template</p>
        {@aria:List {
            items : data.items,
            minWidth:100,
            displayOptions :{
                flowOrientation : "vertical",
                listDisplay : "code",
                tableMode : false
            },
            defaultTemplate : "samples.widgets.list.CustomTemplate"
        }/}

        <p>Sample List widget with flowOrientation horizontal</p>
        {@aria:List {
            items : data.items,
            minWidth:100,
            displayOptions :{
                flowOrientation : "horizontal",
                listDisplay : "label",
                tableMode : false
            },
            defaultTemplate : "samples.widgets.list.CustomTemplate"
        }/}
        <p>Sample List widget with tableMode true</p>
        {@aria:List {
            items : data.items,
            minWidth:100,
            displayOptions :{
                flowOrientation : "vertical",
                listDisplay : "both",
                tableMode : true
            },
            defaultTemplate : "samples.widgets.list.CustomTemplate"
        }/}
        <p>Sample List widget sorted</p>
        {@aria:List {
            items : data.items,
            minWidth:100,
            activateSort:true,
            defaultTemplate : "samples.widgets.list.CustomTemplate"
        }/}
    {/macro}

{/Template}