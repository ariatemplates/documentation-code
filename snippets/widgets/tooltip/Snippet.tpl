{Template {
    $classpath : "snippets.widgets.tooltip.Snippet"
}}

    {macro main ( )}

        ////#wgtTooltipSnippet
        {@aria:Tooltip {
            id:"macroTooltip",
            macro: "tooltipMacro",
            width: 200
        }/}
        ////#wgtTooltipSnippet

    {/macro}

{/Template}