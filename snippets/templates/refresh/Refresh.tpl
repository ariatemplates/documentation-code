{Template {
    $classpath : "snippets.templates.refresh.Refresh",
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

        ////#sectionDefThree
        {section {
            id : "autoSection2",
            macro : "mySectionMacro",
            bindRefreshTo : [{
                inside : data.myContainer,
                to : "myFirstValue",
                recursive : true
            },{
                inside : data.myContainer,
                to : "mySecondValue",
                recursive : true,
                animate : false
            }],
            bind : {
                animation : {
                    to : "animation",
                    inside : data
                }
            },
            type : "div"
        }/}
        ////#sectionDefThree

        ////#sectionDefFour
        data.myContainer.animation = {
            animateOut : "slide left",
            animateIn : "slide left"
        }
        ////#sectionDefFour

        ////#sectionDefFive
        this.$refresh({
            section : "autoSection2",
            animate : false
        });
        ////#sectionDefFive

    {/macro}

    {macro mySectionMacro()}
    {/macro}


{/Template}
