{Template {
    $classpath: "snippets.widgets.autocomplete.Snippet"
}}

    {macro main()}

        {var getHandler=function(){return "aria.resources.handlers.LCResourcesHandler"}/}

        ////#autocomplete
        {@aria:AutoComplete {
            label : "Enter a name:",
            resourcesHandler : getHandler()
        }/}
        ////#autocomplete

    {/macro}

{/Template}