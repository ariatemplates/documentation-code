/*
 * Copyright Amadeus
 */

Aria.tplScriptDefinition({
    $classpath : 'samples.widgets.dialog.binding.DialogBindingSampleScript',
    $prototype : {

        openPopup : function (evt, args) {
            this.$json.setValue(this.data, "dialogOpen", !this.data.dialogOpen);
        },
        loadContent : function (evt, args) {
            this.$refresh(args);
        },
        loadContentBound : function (evt, args) {
            this.$json.setValue(this.data, "macro", args);
        },
        addLine : function () {
            if (this.data.dynamicLines == null) {
                this.data.dynamicLines = [];
            }
            this.data.dynamicLines.push(1);
            this.$refresh({
                section : "dynamicLinesSection"
            });
        },
        removeLine : function () {
            this.data.dynamicLines.pop();
            this.$refresh({
                section : "dynamicLinesSection"
            });
        },
        dialogOpen : function () {

            if (this.data["macro"] && this.data["macro"] != "defaultContent") {
                this.$focus("toFocus");
            } else {
                this.$json.setValue(this.data, "macro", "defaultContent");
            }
        },
        closeClick : function () {
            alert("This is a sample of a callback function associated to the close button on the dialog. Click on OK below to actually close the dialog.");
            this.$json.setValue(this.data, "dialogOpen", false);
        },
        toggleModal : function () {
            this.$json.setValue(this.data, "modalDialog", !this.data.modalDialog);
            this.$refresh();
        }
    }
});
