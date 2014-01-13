{Template {
  $classpath: "samples.widgets.list.editing.ListEditing",
  $hasScript: true
}}

  {macro main()}

    <p>Famous "German" composers</p>
     {@aria:List {
        items : data.german,
        minWidth:200
     }/}
     <br/><br/><br/>
     <p>List of Italian composers (bound to data model):</p>
     {@aria:List {
        minWidth:200,
        margins: "0 20 0 0",
        bind: {
            items: {
                to: "italian",
                inside: data
            }
        }
    }/}

    {@aria:Button {
        label: "+",
        width: 25,
        onclick: {
            fn: "addComposer",
            scope: this
        }
    }/}

    {@aria:Button {
        label: "-",
        width: 25,
        onclick: {
            fn: "removeComposer",
            scope: this
        }
    }/}

    {/macro}

{/Template}