Aria.tplScriptDefinition({
	$classpath : 'snippets.utils.dragdrop.DragScript',
    $dependencies : ["aria.utils.dragdrop.Drag"],

	$prototype : {
        $displayReady : function() {
            ////#drag1js
            drag = new aria.utils.dragdrop.Drag("dragElement");
            ////#drag1js
            ////#drag2js
            drag = new aria.utils.dragdrop.Drag("dialog-container", {
                handle : "dialog-title"
            });
            ////#drag2js
            ////#drag3js
            drag = new aria.utils.dragdrop.Drag("dragElement", {
                proxy: {
                    type : "Overlay"
                }
            });
            ////#drag3js
            ////#drag4js
            drag = new aria.utils.dragdrop.Drag("dragElement", {
                proxy: {
                    type : "CloneOverlay",
                    cfg : {
                        opacity : 0.5
                    }
                }
            });
            ////#drag4js
        }
    }
});
