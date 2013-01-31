{Template {
    $classpath: "snippets.features.prefill.Snippet",
    $hasScript : false
}}

    {var data={value1:"", value2:""}/}

    {macro main()}

        ////#textfield
        {@aria:TextField {
            bind : {
                value : {
                    to : "value2",
                    inside : data
                },
                prefill : {
                    to : "value1",
                    inside : data
                }
            }
        } /}
        ////#textfield

        ////#numberfield
        {@aria:NumberField {
            id : "widgetA",
            bind : {
                value : {
                    to : "value2",
                    inside : data
                },
                prefill : {
                    to : "value1",
                    inside : data
                }
            }
        } /}

        {@aria:NumberField {
            id : "widgetB",
            bind : {
                value : {
                    to : "value1",
                    inside : data
                }
            }
        } /}
        ////#numberfield

    {/macro}

{/Template}