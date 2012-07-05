{Template {
    $classpath:'samples.templates.keyboardnavigation.bubbleKeyMap.KeyMap',
    $hasScript: true
}}

    {macro main()}

        <h2>KeyMap</h2>

        <p>First section defines a keyMap for F3 and Ctrl-A.</p>


        {@aria:Dialog {
            title: "KeyMap",
            modal: true,
            contentMacro : "dialogContent",
            bind:{
                "visible": { inside: data, to: 'dialogVisible' }
            }
        }}{/@aria:Dialog}


        <fieldset>
            <legend>Section 1</legend>
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

             <p style="color:red">If focus is in this section, F3 and Ctrl-A are valid shortcuts.</p>

            {@aria:TextField {label:"This is a textfield in section 1", block:true, labelWidth : 200}/}


                 <fieldset>
                    <legend>Section 2</legend>
                    {section {
                        "id" : "mySection2",
                        "keyMap" : [{
                            key: "*",
                            callback : function () {return true;}
                        }]
                     }}

                         <p style="color:green">If focus is in this section, parent section's F3 and ctrl-A are valid shortcut.</p>
                        {@aria:TextField {label:"This is a textfield in section 2", block:true, labelWidth : 200}/}
                    {/section}
                </fieldset>

            {/section}
        </fieldset>

    {/macro}

    {macro dialogContent()}
        <div style="padding:10px">
            KeyMap : ${data.key}.
        </div>
    {/macro}


{/Template}