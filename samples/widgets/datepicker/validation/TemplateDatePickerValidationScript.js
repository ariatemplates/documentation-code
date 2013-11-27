
Aria.tplScriptDefinition({
    $classpath : 'samples.widgets.datepicker.validation.TemplateDatePickerValidationScript',
    $prototype : {
        refresh : function () {
            this.$refresh({
                filterSection : "datepickers"
            });
        },
        clear : function () {
            this.$json.setValue(this.data, "invalidDate1", "");
            this.$json.setValue(this.data, "value1", null);
            this.$json.setValue(this.data, "invalidDate2", "");
            this.$json.setValue(this.data, "value2", null);
        }
    }
});
