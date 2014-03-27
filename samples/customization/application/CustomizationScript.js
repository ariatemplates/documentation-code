
Aria.tplScriptDefinition({
    $classpath : 'samples.customization.application.CustomizationScript',
    $prototype : {
        $dataReady : function () {
            if (!this.data.customModuleSampleData) {
                this.data.customModuleSampleData = {
                    customModuleParent : "samples.customization.application.sampleparentmodule.Module",
                    customModuleClasspath : "samples.customization.application.samplecustommodule1.Module",
                    customModuleRefpath : "custom:myCustomModule",
                    customModuleArgument : "Custom module argument",
                    originalTemplateClasspath : "samples.customization.application.SampleApp",
                    customTemplateClasspath : "samples.customization.application.CustomSampleApp"
                };
            }
        },

        prefillCustomTemplate : function (evt, value) {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "customTemplateClasspath", value);
        },

        toggleSetCustomTemplateDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "setCustomTemplateDialog", !myData.setCustomTemplateDialog);
        },

        toggleSampleAppDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "sampleAppDialog", !myData.sampleAppDialog);
        },

        toggleAddCustomModuleDialog : function () {
            var myData = this.data.customModuleSampleData;
            this.$json.setValue(myData, "addCustomModuleDialog", !myData.addCustomModuleDialog);
        },

        addCustomModule : function () {
            var myData = this.data.customModuleSampleData;
            var customizationDescriptor = aria.core.environment.Customizations.getCustomizations();
            var modules = customizationDescriptor.modules;
            var newCustomModule = {
                classpath : myData.customModuleClasspath,
                refpath : myData.customModuleRefpath,
                initArgs : {
                    info : myData.customModuleArgument
                }
            };
            if (!modules[myData.customModuleParent]) {
                modules[myData.customModuleParent] = [];
            }
            modules[myData.customModuleParent].push(newCustomModule);
            aria.core.environment.Customizations.setCustomizations(customizationDescriptor);
            this.toggleAddCustomModuleDialog();
            this.refreshCustomizationDescriptor();
        },

        setCustomTemplate : function () {
            var myData = this.data.customModuleSampleData;
            var customizationDescriptor = aria.core.environment.Customizations.getCustomizations();
            var templates = customizationDescriptor.templates;
            templates[myData.originalTemplateClasspath] = myData.customTemplateClasspath;
            aria.core.environment.Customizations.setCustomizations(customizationDescriptor);
            this.toggleSetCustomTemplateDialog();
            this.refreshCustomizationDescriptor();
        },

        refreshCustomizationDescriptor : function () {
            this.$refresh({
                section : "customizationDescriptor"
            });
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
