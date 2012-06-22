{Template {
    $classpath : "ariadoc.snippets.templates.refresh.Refresh",
    $hasScript : true
}}

    {macro main()}

        ////#sectionDef
        {section {
            id : "mySectionId",
            macro : {
                name : "mySectionMacro",
                args : [3]
            }
        }/}
        ////#sectionDef

        ////#sectionDefTwo
        {section {
            id : "autoSection",
            macro : "mySectionMacro",
            bindRefreshTo : [{
                to : "myFirstValue",
                inside : data.myContainer,
                recursive : true
            },{
                to : "mySecondValue",
                inside : data.myContainer,
                recursive : false
            }]
        }/}
        ////#sectionDefTwo

    {/macro}

    {macro mySectionMacro()}
    {/macro}


{/Template}