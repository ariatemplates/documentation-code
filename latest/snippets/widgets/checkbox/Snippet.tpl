{Template {
  $classpath : "ariadoc.snippets.widgets.checkbox.Snippet"} }

  {macro main ( )}

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
            labelPos: "right", // possible values "left", "right", "center"
            sclass: "std"
        }/}
    ////#wgtCheckboxSnippet2

    ////#wgtCheckboxSnippet3
        {@aria:CheckBox {
            label: "Checkbox Label",
            labelPos: "right",
            bind:{
                "value":{inside: data, to: 'isCheckMe'},
                "disabled":{inside: data, to: 'enableMe',
                        transform: 'aria.widgets.transform.NotTransform'}
            }
        }/}
    ////#wgtCheckboxSnippet3
    {/macro}

{/Template}