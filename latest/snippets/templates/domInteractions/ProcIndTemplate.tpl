{Template {
   $classpath: "ariadoc.snippets.templates.domInteractions.ProcIndTemplate",
   $hasScript: true
}}

   {macro main()}

    ////#procIndOne
    <span {id "mySpan"/}>
        ...
    </span>
    ////#procIndOne

    ////#procIndTwo
    {section {
      id : "mySection",
      macro : "mySectionMacro"
    } /}
    ////#procIndTwo

    ////#procIndThree
    {section {
      id : "sectionOne",
      macro : "mySectionMacro",
      bindProcessingTo: {
        to : "loading",
        inside : data
      },
      processingLabel: "Loading, please wait..."
    } /}
    ////#procIndThree

    {/macro}

{/Template}