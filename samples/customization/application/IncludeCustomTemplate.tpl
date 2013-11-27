{Template {
    $classpath:'samples.customization.application.IncludeCustomTemplate'
}}

    {macro main()}
        <div style="color: #E0E0E0; text-align: center; font-size: 48px; padding-top: 50px; padding-bottom: 50px;">Sample application content<br/></div>
        <div style="border: solid 3px #E0E0E0; margin: 10px;">
        {@aria:Template {
            block: true,
            defaultTemplate: "samples.customization.application.samplecustommodule1.templates.CustomModule1Template",
            moduleCtrl: moduleCtrl['custom:myCustomModule']
        }/}
        </div>
    {/macro}

{/Template}
