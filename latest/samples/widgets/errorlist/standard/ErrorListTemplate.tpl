{Template {
  $classpath: "samples.widgets.errorlist.standard.ErrorListTemplate"
}}

  {macro main()}
        {var localisedMsg = {
            "info1" : "Information message line 1.",
            "info2" : "Information message line 2.",
            "info3" : "Information message line 3." }/}
        {@aria:ErrorList {
           margins: "10 1 10 1",
           title: "Information",
           filterTypes: ['I'],
           messages:[{
                type : "I",
                localizedMessage : localisedMsg.info1
            },
            {
                type : "I",
                localizedMessage : localisedMsg.info2
            },
            {
                type : "I",
                localizedMessage : localisedMsg.info3
            }]
        }/}
  {/macro}

{/Template}