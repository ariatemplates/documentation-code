{Template {
    $classpath:'samples.templates.keyboardnavigation.subTemplate.MainTemplate'
}}

    {macro main()}
        <h2>This template contains two subtemplate having same tabIndex.</h2>
        <ul>
            <li>
                <div><strong>First subtemplate:</strong></div>
                {@aria:Template {
                        id:"myFirstTemplate",
                        baseTabIndex:100,
                        defaultTemplate: 'samples.templates.keyboardnavigation.subTemplate.FirstSubTemplate'
                } /}
            </li>
            <li>
                <div><strong>Second subtemplate receiving data from the parent:</strong></div>
                {@aria:Template {
                        id:"mySecondTemplate",
                        baseTabIndex:200,
                        defaultTemplate: "samples.templates.keyboardnavigation.subTemplate.SecondSubTemplate"
                } /}
            </li>
        </ul>


    {/macro}


{/Template}
