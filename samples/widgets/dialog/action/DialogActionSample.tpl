{Template {
  $classpath : 'samples.widgets.dialog.action.DialogActionSample',
  $hasScript : true } }

  {macro main ( )}
    <p> This dialog visible property is set to false and also there is callback function for onOpen and onCloseClick is
    defined . </p>
    <p> <a href = "javascript:void(0);" {on click { fn : clickHandler }/} > Click here </a> to open the dialog </p>
    {@aria:Dialog {
      id : "myDialog",
      title : "Dialog Sample",
      icon : "std:fire",
      width : 400,
      maxHeight : 500,
      visible : false,
      contentMacro : "myContent",
      onOpen : dialogOpen,
      onCloseClick : closeClick,
      bind : {
        "visible" : { inside : data,
          to : 'dialogOpen' }
      }
    }/}
  {/macro}

  {macro myContent ( )}
    <div> The default icon is changed and the fire icon is displayed before the title, modal attribute is not set, so there will not be any overlay in the background</div>
  {/macro}

{/Template}
