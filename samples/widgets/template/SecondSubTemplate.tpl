{Template {
    $classpath:'samples.widgets.template.SecondSubTemplate'
}}

    {macro main()}
        <div>This is the second subtemplate. My data model was set by the parent module.</div>
        <div>${this.data.myMessage}</div>
    {/macro}


{/Template}
