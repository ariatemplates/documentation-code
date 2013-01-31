{Template {
    $classpath : "snippets.widgets.errorlist.Snippet"
}}

    {macro main()}

        {var localisedMsg = {
            "filterOut" : "Message filtered out",
            "filterIn" : "Message filtered in"
        }/}
        {var data={errorMessages:[]}/}

        ////#wgtErrorListSimple
        {@aria:ErrorList {
            margins: "10 1 10 1",
            title: "Information",
            filterTypes: ['I'],
            messages:[{
                type : "I",
                localizedMessage : "Information message"
            }]
        }/}
        ////#wgtErrorListSimple

        ////#wgtErrorListFilter
        {@aria:ErrorList {
            margins: "10 1 10 1",
            title: "Information",
            filterTypes: ['I'],
            messages : [{
                type : "O",
                localizedMessage : localisedMsg.filterOut
                },{
                type : "I",
                localizedMessage : localisedMsg.filterIn
                },{
                type : "E",
                localizedMessage : localisedMsg.filterOut
            }]
        }/}
        ////#wgtErrorListFilter

        ////#wgtErrorListBinding
        {@aria:ErrorList {
            margins: "10 1 10 1",
            title: "Error",
            filterTypes: ['E'],
            bind: {
                messages: {
                    to: "errorMessages",
                    inside: data
                }
            }
        }/}
        ////#wgtErrorListBinding

        ////#wgtErrorListCustomized
        {@aria:ErrorList {
            margins: "10 1 10 1",
            title: "Information",
            defaultTemplate: "snippets.widgets.errorlist.CustomizedErrorListTemplate",
            bind: {
                messages: {
                    to: "errorMessages",
                    inside: data
                }
            }
        }/}
        ////#wgtErrorListCustomized

    {/macro}

{/Template}