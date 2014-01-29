
Aria.tplScriptDefinition({
    $classpath : 'samples.customization.flow.FlowCustomizationScript',
    $prototype : {
        $dataReady : function () {
            if (!this.data.customModuleSampleData) {
                this.data.customModuleSampleData = {
                    customFlowClasspath : "samples.customization.flow.sampleflowmodule1.ModuleFlowReplace"
                };
            }
        },

        prefillCustomTemplate : function (evt, value) {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "customTemplateClasspath", value);
        },

        toggleSampleAppDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "sampleAppDialog", !myData.sampleAppDialog);
        },

        toggleAddCustomModuleDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "addCustomModuleDialog", !myData.addCustomModuleDialog);
        },

        toggleSetCustomFlowDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "addCustomFlowDialog", !myData.addCustomFlowDialog);
        },

        addCustomFlow : function () {

            var customizationDescriptor = aria.core.environment.Customizations.getCustomizations();
            // customFlowClasspath

            customizationDescriptor.flows = {
                "samples.customization.flow.sampleflowmodule1.ModuleFlow" : "samples.customization.flow.sampleflowmodule1.ModuleFlowReplace"
            };

            aria.core.environment.Customizations.setCustomizations(customizationDescriptor);

            this.toggleSetCustomFlowDialog();

            this.refreshCustomizationDescriptor();

        },

        refreshCustomizationDescriptor : function () {
            this.toggleSampleAppDialog();
            this.toggleSampleAppDialog();
        },

        resetCustomizationDescriptor : function () {
            aria.core.environment.Customizations.setCustomizations({});
            this.refreshCustomizationDescriptor();
        },

        getCustomizationDescriptor : function () {
            var customizationDescriptor = aria.core.environment.Customizations.getCustomizations();
            return this.$json.convertToJsonString(customizationDescriptor, {
                indent : "\t"
            });
        }
    }
});
