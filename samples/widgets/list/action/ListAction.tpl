{Template {
  $classpath: "samples.widgets.list.action.ListAction",
  $hasScript: true
}}

  {macro main()}

    <p>Sample List widget with onchange</p>

    {@aria:List {
        items : data.items,
        minWidth:100,
        onchange: listOnChange
    }/}

    <p>Sample List widget with onClick</p>
    {@aria:List {
        items : data.items,
        minWidth:100,
        onclick: listOnClick
    }/}
    <p>Sample List widget with onKeyevent</p>
    {@aria:List {
        items : data.items,
        minWidth:100,
        onkeyevent: listOnKeyevent
    }/}
    <p>Sample List widget with onmouseover</p>
    {@aria:List {
        items : data.items,
        minWidth:100,
        onmouseover: listOnMouseOver
    }/}
    {/macro}

{/Template}