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
      this.$json.setValue(this.data, "macro", "aboutToBeClosed");
      aria.core.Timer.addCallback({
        fn: function() {
          this.$json.setValue(this.data, "dialogOpen", false);
          this.$json.setValue(this.data, "macro", "defaultContent");
        },
        scope: this,
        delay: 2000
      });
    },

    toggleModal : function () {
      this.$json.setValue(this.data, "modalDialog", !this.data.modalDialog);
      this.$refresh();
    }
  }
});
