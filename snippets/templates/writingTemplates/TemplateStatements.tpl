{Template {
    $classpath: "snippets.templates.writingTemplates.TemplateStatements",
    $hasScript: true,
    $extends: "snippets.templates.writingTemplates.MyParentTemplate",
    $macrolibs : {
        myMacroLib : "snippets.templates.writingTemplates.SomeLib"
    }
}}

    {var myVar = 8 /}
    {var myArray = [] /}
    {var arrayOrMap = {} /}
    {var myMap={}/}
    {var data = {passengers:[],listOfPassengers:[],isProcessing:false,myProperty:""}/}
    {createView myView on arrayOrMap/}
    {var countryList = []/}
    {var mySet = {}/}
    {var param1=""/}
    {var param2=""/}

    ////#view
    {createView viewName on arrayOrMap/}
    ////#view

    ////#var
    {var v = 5 /}
    ////#var

    {macro main ()}

        ////#basicStatementOne
        ${myVar}
        ////#basicStatementOne

        ////#basicStatementTwo
        ${myFunction()}
        ////#basicStatementTwo

        ////#basicStatementThree
        ${myArray.push(myVar)}
        ////#basicStatementThree

        ////#set
        {set v = 10 /}
        ////#set

        ////#checkDefault
        {checkDefault v = 1 /}
        ////#checkDefault

        ////#ifelse
        {if data.passengers.length == 0}
            // if instructions
        {elseif data.passengers.length < 5/}
            // elseif instructions
        {else/}
            // else instructions
        {/if}
        ////#ifelse

        ////#for
        {for var i = 0; i < 15; i++}
            // for instructions
        {/for}
        ////#for

        ////#aforeach
        {foreach varName in myMap}
            // foreach instructions
        {/foreach}
        {foreach varName inArray myArray}
            // foreach instructions
        {/foreach}
        {foreach varName inSortedView myView}
            // foreach instructions
        {/foreach}
        {foreach varName inFilteredView myView}
            // foreach instructions
        {/foreach}
        {foreach varName inView myView}
            // foreach instructions
        {/foreach}
        ////#aforeach

        ////#bforeachexample
        {foreach country in countryList}
            Country: ${country.name}<br/>
            Country index: ${country_index}<br/>
            Country position in the loop: ${country_ct}
        {/foreach}
        ////#bforeachexample

        ////#separator
        {foreach elt in mySet}
            {separator}, {/separator} // The comma will be inserted as a separator of the mySet elements
            ${elt}
        {/foreach}
        ////#separator

        ////#cdata
        // my code comment
        {set myVar = 5 /}
        {CDATA}
            // my comment
            ${myVar}
        {/CDATA}
        ${myVar}
        ////#cdata

        ////#anotherView
        {createView passengersView on data.listOfPassengers /}
        {foreach pax inView passengersView}
            // do something
        {/foreach}
        ////#anotherView

        ////#id
        <div {id "test"/}>test</div>
        ////#id

         ////#exampleon
        <div {on click "myFunction"/}>Click here</div> // call the method "myFunction" from the template script
        <div {on click {fn:"myFunction", args: {}}/}>Click here</div> // call the method myFunction from the template script with parameters
        <div {on click {fn:"myFunction", scope: moduleCtrl, args: {}}/}>Click here</div> // call the method myFunction from the moduleCtrl
        ////#exampleon

        ////#acall
        {call myMacro(param1, param2)/}
        ////#acall
        ////#bcall
        {call myMacroLib.myMacro(param1, param2)/}
        ////#bcall
        ////#ccall
        {call $MyParentTemplate.myMacro(param1, param2)/}
        ////#ccall

        ////#asection
        {section {
            id : "sectionId",
            macro : "myMacro"
        } /}
        ////#asection

        ////#bsection
        {section {
            id: "someId",
            macro : {
                name : "myMacro",
                args : [4,"myArg"],
                scope : this
            },
            type : "div",
            attributes : {
                classList : [
                    "mySectionFirstClass",
                    "mySectionSecondClass"
                ],
                width : "500"
            },
            bindRefreshTo : [{
                inside : data,
                to : "myProperty",
                recursive : true
            }],
            bindProcessingTo : {
                to : "isProcessing",
                inside : data
            },
			on : {
				click:{
					fn:callback,
					scope:this,
					args:{}
				},
				mouseover:callback2
			},
            processingLabel : "processing...",
            keyMap : [{
                key : "F3",
                callback : {
                    fn : "onF3Press",
                    scope : this
                }
            }],
            tableNav : {
                ctrl : true
            }
        }/}
        ////#bsection

        ////#repeater
        {repeater {
            id : "myRepeater",
            content: myArray, // iterated set, which can be an array or a map
            loopType: "array", // can be array or map (automatically set from the type of content if not specified)
            // properties of sections can be used here for the parent section as, for example, the type property:
            type: "tbody",
            // For each item in the iterated set, a child section is created and its properties can be set here:
            childSections : {
                id: "myChildSection", // A child-dependent suffix will be automatically appended to this id for each
                // child section
                macro: {
                    // This macro will be called with the an additional parameter: the item parameter
                    name: "myMacro", // Macro to be called in the section
                    args: ["param1","param2"] // here, the item parameter will be appended as the third parameter
                },
                // properties of sections can be used here for the child section as, for example, the type property:
                type: "TR",
                attributes: myChildSectionAttributes // a method that is defined in the template script
            }
        }/}
        ////#repeater

        {var myValue=""/}
        {var myDate=new Date()/}
        {var myTime=new Date()/}

        ////#emptyModifier
        ${myValue|empty:"myDefaultValue"|capitalize}
        ////#emptyModifier

        ////#dateModifier
         ${myDate|dateformat:"dd MMMM yyyy"}
        ////#dateModifier

        ////#timeModifier
         ${myTime|timeFormat:"hh:mm:ss"}
        ////#timeModifier

        ////#padModifier
        ${myValue|pad:3}
        ${'XYZ'|pad:5,true} //will result in '&nbsp;&nbsp;XYZ'
        ////#padModifier

        ////#customModifier
        ${myCustomModifier(myValue)}
        ////#customModifier


    {/macro}

    ////#macro
    {macro myMacro (param1, param2)}
        // macro content
    {/macro}
    ////#macro

{/Template}