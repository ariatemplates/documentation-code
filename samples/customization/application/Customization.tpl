{Template {
    $classpath:'samples.customization.application.Customization',
    $hasScript:true
}}

    {macro main()}
        {var myData = data.customModuleSampleData/}
        This page shows some customization features of Aria Templates.
        To customize an application, the customization descriptor can be used to replace a template by another one, or to add a custom sub-template to a parent template.
        On this page, you can edit the customization descriptor and/or start a basic sample application (in a dialog).<br/><br/>
        {section {
            id: "customizationDescriptor",
            macro: "customizationDescriptor"
        }/}
        <br />
        {@aria:Button {
            label: "Add a custom module",
            onclick: toggleAddCustomModuleDialog
        }/}
        {@aria:Button {
            label: "Set a custom template",
            onclick: toggleSetCustomTemplateDialog
        }/}
        {@aria:Button {
            label: "Reset customization descriptor",
            onclick: resetCustomizationDescriptor
        }/}
        {@aria:Button {
            label: "Start sample application",
            onclick: toggleSampleAppDialog
        }/}
        {@aria:Dialog {
            macro: "customModuleDialog",
            modal: true,
            title: "Add a custom module",
            bind: {
                visible: {
                    to: "addCustomModuleDialog",
                    inside: myData
                }
            }
        }/}
        {@aria:Dialog {
            macro: "customTemplateDialog",
            modal: true,
            title: "Set a custom template",
            bind: {
                visible: {
                    to: "setCustomTemplateDialog",
                    inside: myData
                }
            }
        }/}
        {@aria:Dialog {
            macro: "sampleApp",
            modal: true,
            title: "Sample application",
            bind: {
                visible: {
                    to: "sampleAppDialog",
                    inside: myData
                }
            }
        }/}
    {/macro}

    {macro customModuleDialog()}
        {var myData = data.customModuleSampleData/}
        <div style="padding:10px">
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Parent module classpath",
            bind: {
                value:{
                    to: "customModuleParent",
                    inside: myData
                }
            }
        }/}
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Custom module classpath",
            bind: {
                value:{
                    to: "customModuleClasspath",
                    inside: myData
                }
            }
        }/}
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Custom module refpath",
            bind: {
                value:{
                    to: "customModuleRefpath",
                    inside: myData
                }
            }
        }/}
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Custom module argument",
            bind: {
                value:{
                    to: "customModuleArgument",
                    inside: myData
                }
            }
        }/}
        <br />
        {@aria:Button {
            label: "Add custom module",
            onclick: addCustomModule
        }/}
        {@aria:Button {
            label: "Cancel",
            onclick: toggleAddCustomModuleDialog
        }/}
        </div>
    {/macro}


    {macro customTemplateDialog()}
        {var myData = data.customModuleSampleData/}
        <div style="padding:10px">
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Original template classpath",
            bind: {
                value:{
                    to: "originalTemplateClasspath",
                    inside: myData
                }
            }
        }/}
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Custom template classpath",
            bind: {
                value:{
                    to: "customTemplateClasspath",
                    inside: myData
                }
            }
        }/}
        <br />
        <b>Available custom templates:</b><br/>
        {@aria:Link {
            label: "samples.customization.application.CustomSampleApp",
            onclick: {
                fn: prefillCustomTemplate,
                args: "samples.customization.application.CustomSampleApp"
            }
        }/}<br />
        {@aria:Link {
            label: "samples.customization.application.IncludeCustomTemplate",
            onclick: {
                fn: prefillCustomTemplate,
                args: "samples.customization.application.IncludeCustomTemplate"
            }
        }/}<br />
        <br />
        {@aria:Button {
            label: "Set custom template",
            onclick: setCustomTemplate
        }/}
        {@aria:Button {
            label: "Cancel",
            onclick: toggleSetCustomTemplateDialog
        }/}
        </div>
    {/macro}

    {macro customizationDescriptor()}
        Here is the current customization descriptor:<br />
        <pre style="overflow: visible;">
            ${getCustomizationDescriptor()|escape}
        </pre>
    {/macro}

    {macro sampleApp()}
        {@aria:Template {
            defaultTemplate: "samples.customization.application.SampleApp",
            width: 500,
            height: 500,
            moduleCtrl: {
                classpath: "samples.customization.application.sampleparentmodule.Module"
            }
        }/}
    {/macro}

{/Template}
