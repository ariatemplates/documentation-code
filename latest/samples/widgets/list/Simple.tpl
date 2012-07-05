{Template {
  $classpath: "samples.widgets.list.Simple"
}}

  {macro main()}

    <p>Sample List widget </p>

    {@aria:List {
        items : data.items,
        minWidth:100
    }/}

    <p>Sample List widget disabled</p>

    {@aria:List {
        items:data.items,
        minWidth:100,
        disabled : true
    }/}
   {/macro}

{/Template}