{Template {
    $classpath : "snippets.widgets.text.Snippet"
}}

    {macro main()}

        {var data={"view:calvalue":""}/}

        ////#wgtTextSnippet1
        {@aria:Text {
            text: "This is the text to be displayed.",
            width : 150,
            ellipsis: "...",
            ellipsisLocation: "right"
        }/}
        ////#wgtTextSnippet1

        ////#wgtTextSnippet2
        {@aria:Text {
            ellipsis: "...",
            ellipsisLocation: "right",
            width:30,
            bind: {
                text : {
                    to: "view:calvalue",
                    inside: data,
                    transform : {
                        toWidget : function(text) {
                            var dayDate = new Date(text);
                            var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
                            return weekday[dayDate.getDay()];
                        },
                        fromWidget : function (text) {return null;}
                    }
                }
            }
        }/}
        ////#wgtTextSnippet2

    {/macro}

{/Template}