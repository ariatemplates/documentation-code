{Template {
    $classpath: "snippets.features.autoselect.Snippet",
    $hasScript : false
}}

    {macro main()}

        ////#textfield
        {@aria:TextField {
            id : "txtf0",
            label : "TextField ",
            labelWidth:150,
            width:400,
            value: "Selected?",
            autoselect: true
        } /}
        ////#textfield

    {/macro}

{/Template}