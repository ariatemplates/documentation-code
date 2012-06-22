{Template {
    $classpath : "ariadoc.snippets.templates.domInteractions.DomInteractionTemplate",
    $hasScript : true
}}

    {macro main ()}
        ////#domInteractions
        <div {id "myDivId" /}>Lorem ipsum</div>

        {section {
          id : "mySectionId",
          macro : "mySectionMacro"
        } /}

        {@aria:TextField {
          id : "myTextField"
        } /}
        ////#domInteractions
        ////#focusExample
        {@aria:TextField {
          id : "tf"
        } /}
        ////#focusExample

    {/macro}

{/Template}