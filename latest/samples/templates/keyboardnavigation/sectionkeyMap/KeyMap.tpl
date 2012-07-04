{Template {
    $classpath:'samples.templates.keyboardnavigation.sectionkeyMap.KeyMap',
    $hasScript: true
}}

    {macro main()}

        <h2>KeyMap</h2>

        <p>First section defines a keyMap for F3</p>

        {@aria:Dialog {
            title: "KeyMap",
            modal: true,
            contentMacro : "dialogContent",
            bind:{
                "visible": { inside: data, to: 'dialogVisible' }
            }
        }}{/@aria:Dialog}


        <fieldset>
            <legend>Section</legend>
            {section {
                "id" : "mySection",
                "keyMap" : [{
                    key: "F3",
                    callback : {
                        fn : function () {
                            this.data.key = "F3";
                            aria.utils.Json.setValue(data, "dialogVisible", true);
                        },
                        scope : this
                    }
                },{
                    key: "A",
                    ctrl : true,
                    callback : {
                        fn : function () {
                            this.data.key = "Ctrl-A";
                            aria.utils.Json.setValue(data, "dialogVisible", true);
                        },
                        scope : this
                    }
                }]
             }}
                {@aria:TextField {label:"This is a textfield in section", block:true, labelWidth : 200}/}

            {/section}
        </fieldset>

    {/macro}

    {macro dialogContent()}
        <div style="padding:10px">
            KeyMap : ${data.key}.
        </div>
    {/macro}


{/Template}