{Template {
    $classpath:'samples.customization.application.samplecustommodule1.templates.CustomModule1Template'
}}

    {macro main()}
        <div style="color: #E0E0E0; text-align: center; font-size: 25px; padding-top: 25px; padding-bottom: 25px;">Custom sub-template</div>
        <div style="text-align: center; padding-top: 10px; padding-bottom: 10px;">
            {if moduleCtrl.myCustomModule1Function}
                {@aria:Button {
                    label: "Call custom module controller",
                    onclick: {
                        fn: moduleCtrl.myCustomModule1Function,
                        scope: moduleCtrl
                    }
                }/}
            {else/}
                (Custom module controller not loaded)
            {/if}
        </div>
    {/macro}

{/Template}
