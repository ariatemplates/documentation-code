{Template {
  $classpath : "ariadoc.snippets.widgets.tooltip.Snippet",
  $hasScript: false } }

  {macro main ( )}

   ////#wgtTooltipSnippet
        {@aria:Tooltip {id:"simpleTooltip", width: 200}}
            Content of the simple tooltip.
        {/@aria:Tooltip}
               OR
        {@aria:Tooltip {
            id:"macroTooltip",
            macro: "tooltipMacro",
            width: 200 }/}
    ////#wgtTooltipSnippet


    {/macro}

{/Template}