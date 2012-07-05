{Template {
  $classpath : "samples.utils.dragdrop.DragDrop",
  $css : ["samples.utils.dragdrop.style.TemplateDialogSkin", "samples.utils.dragdrop.style.DragDropCSS"],
  $hasScript : true
} }

  {macro main ( )}
    <div id = "dialog-container">
        <div id = "dialog-title">
            <span id="dialog-title-dialog-message">Handle</span>
        </div>
        <div id="dialog-message">
            <p>Drag me from the handle</p>
        </div>

    </div>
    <div id="first-boundary", class="boundary">
        <div id="constrained-draggable" class="constrained-draggable-class">You cannot drag me too far...</div>
        <div id="free-draggable" class="constrained-draggable-class">You can drag me anywhere</div>
    </div>
    <div id="second-boundary", class="boundary">
        <div id="vertical-draggable" class="constrained-draggable-class">You can drag me only vertically</div>
    </div>

{/macro}

{/Template}