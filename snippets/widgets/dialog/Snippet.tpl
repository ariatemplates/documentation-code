{Template {
    $classpath : "snippets.widgets.dialog.Snippet"
}}

    {macro main()}

        ////#wgtDialogSimple
        {@aria:Dialog {
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            icon: "std:info",
            width: 400,
            maxHeight: 500,
            modal: true
        }/}
        ////#wgtDialogSimple

        ////#wgtDialogAction
        {@aria:Dialog {
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            icon: "std:fire",
            width: 400,
            maxHeight: 500,
            onOpen: "openDialog",
            onCloseClick: "closeDialog"
        }/}
        ////#wgtDialogAction

        ////#wgtDialogMove1
        {@aria:Dialog {
            id : "sampleDialogOne",
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            movable : true
        }/}
        ////#wgtDialogMove1

        ////#wgtDialogMove2
        {@aria:Dialog {
            id : "sampleDialogTwo",
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            movable : true,
            movableProxy : {
                type : "Overlay"
            }
        }/}
        ////#wgtDialogMove2

        ////#wgtDialogMove3
        {@aria:Dialog {
            id : "sampleDialogThree",
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            movable : true,
            movableProxy : {
                type : "CloneOverlay",
                cfg : {
                    opacity : 0.7
                }
            }
        }/}
        ////#wgtDialogMove3

        ////#wgtDialogMove4
        {@aria:Dialog {
            id : "sampleDialogFour",
            title: "Dialog Sample",
            contentMacro : "dialogMacro",
            movable : true,
            ondragstart : {
                fn : "onDragStart"
            },
            ondragend : {
                fn : "onDragEnd"
            }
        }/}
        ////#wgtDialogMove4
		
		////#wgtDialogResize
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
            height : 250
        }/}
		////#wgtDialogResize

    {/macro}

{/Template}