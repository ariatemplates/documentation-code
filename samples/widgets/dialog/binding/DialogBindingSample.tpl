{Template {
  $classpath : "samples.widgets.dialog.binding.DialogBindingSample",
  $hasScript : true } }

  {macro main ( )}

    {@aria:Button {
      id : "btnPopup",
      label : "Toggle dialog",
      block : true,
      onclick : {
        fn : "openPopup" }
    }/}
    <br/>
    {@aria:Button {
      label : "Set "+(data.modalDialog?"non modal":"modal"),
      onclick : {
        fn : "toggleModal" },
      block : true }/}

    {@aria:Dialog {
      title : "Test dialog",
      cssClass : "mainContent",
      icon : "std:info",
      width : 400,
      maxHeight : 500,
      modal : data.modalDialog,
      bind : {
        "visible" : { inside : data,
          to : 'dialogOpen' },
        "contentMacro" : { inside : data,
          to : 'contentMacro' },
        "title" : { inside : data,
          to : 'dialogTitle' }
      },
      onOpen : dialogOpen,
      onCloseClick : closeClick }/}

    {/macro}
    {macro popupContentButtons ( )}
        <div style="padding:10px;">
            Change the content of the dialog with the following buttons:<br/><br/>
            {@aria:Button {
                label: "Default content",
                onclick: {
                    fn: "loadContentBound",
                    args: "defaultContent"
                }
            }/} &nbsp;&nbsp;
            {@aria:Button {
                label: "Dynamic lines",
                onclick: {
                    fn: "loadContentBound",
                    args: "dynamicLines"
                }
            }/} &nbsp;&nbsp;
            {@aria:Button {
                label: "Dialog title",
                onclick: {
                    fn: "loadContentBound",
                    args: "dialogTitle"
                }
            }/} &nbsp;&nbsp;
            {@aria:Button {
                label: "Close button",
                onclick: {
                    fn: "loadContentBound",
                    args: "infoCloseButton"
                }
            }/}
        </div>

  {/macro}

  {macro defaultContent ( )}
    <div style = "padding:10px;" >
    <h1> Dialog box content </h1>
    Dialog boxes can be filled with any content from a macro , including widgets , sections which can be refreshed
    independently , sub - templates . . .
    </div>
    {call popupContentButtons()/}

  {/macro}

  {macro dialogTitle ( )}
    <div style = "padding:10px;" >
    <h1> Dialog title </h1>
    The title of the dialog is bindable , so that it can be changed dynamically without refreshing the template .
    <br/> <br />
    {@aria:TextField {
      id : "toFocus",
      label : "Dialog title",
      bind : {
        value : {
          to : 'dialogTitle',
          inside : data }
      }
    }/}
    </div>
    {call popupContentButtons()/}
  {/macro}

  {macro infoCloseButton ( )}
    <div style = "padding:10px;" >
    <h1> Close button </h1>
    The dialog close button ( X ) and a close button inside the dialog can share the same callback , as shown in the
    following example : <br /> <br />
    {@aria:Button {
      id : "toFocus",
      label : "Click here to close the dialog.",
      onclick : closeClick }/}
    </div>
    {call popupContentButtons()/}
  {/macro}

  {macro dynamicLines ( )}
    <div style = "padding:10px;" >
    <h1> Dynamic lines </h1>
    {@aria:Button {
      id : "toFocus",
      label : "Add a line",
      onclick : addLine }/}
    {section "dynamicLinesSection"}
      {if data.dynamicLines}
        {foreach line inArray data.dynamicLines}
          <br /> <br />
          {@aria:Button {
            label : "Remove a line",
            onclick : removeLine }/}
        {/foreach}
      {/if}
    {/section}
    </div>
    {call popupContentButtons()/}
  {/macro}

{/Template}
