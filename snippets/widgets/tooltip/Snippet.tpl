{Template {
    $classpath : "snippets.widgets.tooltip.Snippet"
}}

    {macro main ( )}

        ////#wgtTooltipSnippet
        {@aria:Tooltip {id:"simpleTooltip", width: 200}}
            Content of the simple tooltip.
        {/@aria:Tooltip}

        // could also be written:

        {@aria:Tooltip {
            id:"macroTooltip",
            macro: "tooltipMacro",
            width: 200
        }/}
        ////#wgtTooltipSnippet

    {/macro}

{/Template}