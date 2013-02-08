{Template {
    $classpath: "snippets.appendices.FormSubmitView",
    $hasScript: true
}}

    {macro main()}

        ////#uploadExample
        {@aria:Link {
            label: "Import from file",
            onclick: {
                fn: "uploadFile"
            }
        }/}
        ////#uploadExample

    {/macro}

{/Template}