{Template {
    $classpath : "snippets.widgets.radiobutton.Snippet"
}}

    {macro main()}

        {var data={group1:""}/}

        ////#wgtRadioButtonSnippet1
        {@aria:RadioButton {
            label: "Option A",
            keyValue: "a",
            block: true
        }/}
        ////#wgtRadioButtonSnippet1

        ////#wgtRadioButtonSnippet2
        {@aria:RadioButton {
            label: "Option A",
            keyValue: "a",
            block: true,
            labelPos: "left" // other possible values are right, top, bottom
        }/}
        ////#wgtRadioButtonSnippet2

        ////#wgtRadioButtonSnippet3
        {@aria:RadioButton {
            label: "Option A",
            keyValue: "a",
            block: true,
            bind:{
                "value":{inside: data, to: 'group1'}
            },
            onchange: {
                fn: "onRadioChange",
                args: {radioGroup: "1", keyValue: "a"}
            }
        }/}
        ////#wgtRadioButtonSnippet3

    {/macro}

{/Template}