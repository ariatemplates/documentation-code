{Template {
    $classpath: "snippets.widgets.multiautocomplete.Snippet",
    $dependencies: ["aria.resources.handlers.LCRangeResourceHandler"]
}}

    {macro main()}

        {var getHandler=function(){return new aria.resources.handlers.LCRangeResourceHandler()}/}

        ////#multiautocomplete
        {@aria:MultiAutoComplete {
            label : "Enter a name:",
            resourcesHandler : getHandler()
        }/}
        ////#multiautocomplete

    {/macro}

{/Template}
