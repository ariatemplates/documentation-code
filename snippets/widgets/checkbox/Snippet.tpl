{Template {
  $classpath : "snippets.widgets.checkbox.Snippet"
}}

    {macro main()}

        {var data={isChecked:false,isOK:false} /}

        ////#wgtCheckboxSnippet1
		{@aria:CheckBox {
            label: "Checkbox Label" ,
            onchange : {
                fn : "onchange",
                args : "1"
            }
        }/}
        ////#wgtCheckboxSnippet1


        ////#wgtCheckboxSnippet2
	    {@aria:CheckBox {
            label: "Checkbox Label",
            labelPos: "right", // possible values: "left", "right", "center"
            sclass: "std"
        }/}
        ////#wgtCheckboxSnippet2

        ////#wgtCheckboxSnippet3
        {@aria:CheckBox {
            label: "Checkbox Label",
            labelPos: "right",
            bind:{
                "value": { inside: data, to: 'isChecked' },
                "disabled":{
                    inside: data,
                    to: 'isOK',
                    transform: 'aria.widgets.transform.NotTransform'
                }
            }
        }/}
        ////#wgtCheckboxSnippet3

    {/macro}

{/Template}