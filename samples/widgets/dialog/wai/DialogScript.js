/*
 * Copyright Amadeus
 */

Aria.tplScriptDefinition({
    $classpath : 'samples.widgets.dialog.wai.DialogScript',
    $prototype : {
        open: function () {
            aria.utils.Json.setValue(this.data, "dialogOpen", true);
        },

        toggleModal: function () {
            aria.utils.Json.setValue(this.data, "modalDialog", !this.data.modalDialog);
            this.$refresh();
        },

        dialogClose: function () {
            aria.utils.Json.setValue(this.data, "dialogOpen", false);
        }
    }
});
