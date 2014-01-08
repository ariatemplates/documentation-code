{Template {
    $classpath: "snippets.widgets.autocomplete.Snippet",
    $dependencies: ["aria.resources.handlers.LCResourcesHandler"]
}}

    {macro main()}

        {var getHandler=function(){return new aria.resources.handlers.LCResourcesHandler()}/}

        ////#autocomplete
        {@aria:AutoComplete {
            label : "Enter a nameasdsad:",
            resourcesHandler : getHandler()
        }/}
        ////#autocomplete

    {/macro}

{/Template}