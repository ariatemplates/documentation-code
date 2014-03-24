{Template {
    $classpath:'samples.customization.flow.FlowCustomization',
    $hasScript:true
}}

    {macro main()}
        {var myData = data.customModuleSampleData/}
        This page shows flow customization features of Aria Templates.


        <br />
        {@aria:Button {
            label: "Set a custom flow",
            onclick: toggleSetCustomFlowDialog
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
            macro: "sampleApp",
            modal: true,
            title: "Sample application",
            bind: {
                visible: {
                    to: "sampleAppDialog",
                    inside: myData
                }
            }
        }}
        {/@aria:Dialog}

        {@aria:Dialog {
            macro: "customFlowDialog",
            modal: true,
            title: "Add a custom module",
            bind: {
                visible: {
                    to: "addCustomFlowDialog",
                    inside: myData
                }
            }
        }}
        {/@aria:Dialog}

    {/macro}

    {macro sampleApp()}


        {@aria:Template {
            defaultTemplate: "samples.customization.flow.flows.templates.Main",
            width: 500,
            height: 500,
            moduleCtrl: {
                classpath: "samples.customization.flow.sampleflowmodule1.Module"
            }
        }/}
    {/macro}

    {macro customFlowDialog()}
        {var myData = data.customModuleSampleData/}
        <div style="padding:10px">
        {@aria:TextField {
            labelWidth: 200,
            width: 500,
            block: true,
            label: "Custom flow classpath",
            bind: {
                value:{
                    to: "customFlowClasspath",
                    inside: myData
                }
            }
        }/}
        <br />
        {@aria:Button {
            label: "Add custom flow",
            onclick: addCustomFlow
        }/}
        {@aria:Button {
            label: "Cancel",
            onclick: toggleSetCustomFlowDialog
        }/}
        </div>
    {/macro}

{/Template}
