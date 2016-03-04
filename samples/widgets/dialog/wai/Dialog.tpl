{Template {
    $classpath : "samples.widgets.dialog.wai.Dialog",
    $hasScript : true
}}

    {macro main()}
        <p>Welcome, please use the button below to login</p>
        {@aria:Button {
            id : "btnPopup",
            label : "Login",
            onclick : {
                fn : "open"
            }
        }/}

        {@aria:Dialog {
            waiAria: true,
            title : "Please enter your credential",
            icon : "std:info",
            autoFocus: true,
            closeLabel: "Close",
            width : 400,
            maxHeight : 500,
            modal : data.modalDialog,
            bind : {
                visible : { inside : data, to : 'dialogOpen' }
            },
            macro: "content"
        }/}
    {/macro}

    {macro content()}
        <div style="padding: 0 10px;">
            <p>
                {@aria:TextField {
                    label: "Username"
                }/}
            </p>
            <p>
                {@aria:PasswordField {
                    label: "Password"
                }/}
            </p>
            <p style="text-align: right">
                {@aria:Button {
                    label: "Cancel",
                    onclick: {
                        fn: "dialogClose"
                    }
                }/}

                {@aria:Button {
                    label: "Login",
                    sclass : "important",
                    onclick: {
                        fn: "dialogClose"
                    }
                }/}
            </p>
       </div>
    {/macro}

{/Template}
