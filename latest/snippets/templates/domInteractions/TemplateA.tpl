// Template A
{Template {
    $classpath: "snippets.templates.domInteractions.TemplateA",
    $hasScript: true
}}

    {macro main()}

        // Template B
        {@aria:Template {
            defaultTemplate: "snippets.templates.domInteractions.TemplateB"
        }/}

        // Template C
        {@aria:Template {
            defaultTemplate: "snippets.templates.domInteractions.TemplateC",
            id: "thisIsTemplateC"
        }/}
    {/macro}

{/Template}