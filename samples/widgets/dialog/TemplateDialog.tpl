{Template {
  $classpath : 'samples.widgets.dialog.TemplateDialog',
  $hasScript: true } }

  {macro main ( )}
    <p> <a href = "javascript:void(0);" {on click { fn : clickHandler }/} > Click here </a> to open the dialog </p>
    {@aria:Dialog {
      id : "myDialog",
      title : "Dialog Sample",
      icon : "std:info",
      width : 400,
      maxHeight : 500,
      modal : true,
      visible : false,
      contentMacro : "myContent",
      bind : {
        "visible" : { inside : data,
          to : 'dialogOpen' }
      } }/}
  {/macro}

  {macro myContent ( )}
    <div> Some content inside . . . . </div>
  {/macro}

{/Template}
